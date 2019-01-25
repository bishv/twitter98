import express from 'express';
import path from 'path';

const PORT = 7700;

const PUBLIC_PATH = path.join(__dirname, 'public');

const app = express();
app.use(express.static(PUBLIC_PATH));

app.get("/users", function(req, res) {
  res.send([
    { id: 1, name: "Alexey", age: 30 },
    { id: 2, name: "Ignat", age: 15 },
    { id: 3, name: "Sergey", age: 26 },
  ]);
});

app.all("*", function(req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});