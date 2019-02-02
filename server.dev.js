import express from 'express';
import path from 'path';
import WebSocket from 'ws';
import http from 'http';
import io from 'socket.io';
import mysql from 'mysql';
import bodyParser from 'body-parser';

const mysqlPool = mysql.createPool({
  'host': 'localhost',
  'user': 'root',
  'password': '222295589',
  'database': 'twitter98'
});

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

httpServer.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});