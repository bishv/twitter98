import express from 'express';
import path from 'path';
import WebSocket from 'ws';
import http from 'http';
import io from 'socket.io';
import mysql from 'mysql';
import bodyParser from 'body-parser';

import jwt  from 'jsonwebtoken';

const secret = 'mysecretsshhh';

const mysqlPool = mysql.createPool({
  'host': 'localhost',
  'user': 'root',
  'password': '222295589',
  'database': 'twitter98'
});

function withAuth(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}

const app = express();

var httpServer = http.Server(app);

var socketServer = io(httpServer);

socketServer.on('connection', function (socketClient) {
  socketClient.emit('news', { hello: 'world' });
  socketClient.on('my other event', function (data) {
    console.log(data);
  });
});

const PORT = 7700;

const PUBLIC_PATH = path.join(__dirname, 'public');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.babel').default;
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  stats: {
    colors: true
  }
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

const apiRouter = express.Router();

apiRouter.post('/authenticate', function(req, res, next) {
  const { email, password } = req.body;
  mysqlPool.getConnection((error, conn) => {
    if (error) {
      next(error);
    } else {
      conn.query('SELECT * FROM users WHERE `mail` = ? LIMIT 1', [email], (error, rows, fields) => {
        if (error) {
          next(error);
        } else {
          if (rows.length > 0) {
            if (rows[0].password == password) {
              const payload = {
                'userId': rows[0].id
              };
              const token = jwt.sign(payload, secret, {
                expiresIn: '24h'
              });
              res.cookie('token', token, {
                'httpOnly': true
              });
              res.send(JSON.stringify({
                'success': true
              }));
              res.end();
            } else {
              next(new Error('Invalid password'));
            }
          } else {
            next(new Error('User not found'));
          }
        }
      });
    }
  });
});

apiRouter.use(function (error, req, res, next) {
  res.write(JSON.stringify({
    'success': false,
    'error': error.message
  }));
  res.end();
});

app.get('/api/user/check', withAuth, function(req, res) {
  res.end('123');
});





app.get('/api/users', function(req, res, next) {
  mysqlPool.getConnection((error, mysqlConnection) => {
    if (error) {
      next(error);
    } else {
      mysqlConnection.query('SELECT * FROM users', [], (error, rows, fields) => {
        if (error) {
          next(error);
        } else {
          res.send(rows);        
        }
      });
    }
  });
});

app.get('/api/users/:id([0-9]+)', function (req, res, next) {
  var userId = req.params.id;
  mysqlPool.getConnection((error, mysqlConnection) => {
    if (error) {
      next(error);
    } else {
      mysqlConnection.query('SELECT * FROM users WHERE id = ?', [userId], (error, rows, fields) => {
        if (error) {
          next(error);
        } else {
          if (rows.length > 0) {
            res.send(rows[0]);        
          } else {
            res.send(null);
          }
        }
      });
    }
  });
});

app.get('/api/users/add/:nick/:email/:firstname/:lastname/:gender', function (req, res, next) {
  var userId = req.params.id;
  mysqlPool.getConnection((error, mysqlConnection) => {
    if (error) {
      next(error);
    } else {
      mysqlConnection.query('SELECT * FROM users WHERE id = ?', [userId], (error, rows, fields) => {
        if (error) {
          next(error);
        } else {
          if (rows.length > 0) {
            res.send(rows[0]);        
          } else {
            res.send(null);
          }
        }
      });
    }
  });
});

app.get('/api/posts/getMy', function (req, res, next) {
  mysqlPool.getConnection((error, mysqlConnection) => {
    if (error) {
      next(error);
    } else {
      mysqlConnection.query('SELECT * FROM posts ')
    }
  });
});

app.post('/api/register', function (req, res, next) {
  mysqlPool.getConnection((error, mysqlConnection) => {
    if (error) {
      next(error);
    } else {
      res.json({
        'success': true,
        'data': req.body
      });    
    }
  });
});

app.use(function (error, req, res, next) {
  res.json({
    'success': false,
    'error': error.message
  });
});

app.use('/api', apiRouter);

app.all('*', function(req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

httpServer.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});