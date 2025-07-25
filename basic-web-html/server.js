const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/profile.html');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});