const express = require('express');
const app = express();
const port = 3000;
const { getAll } = require('../database/db_connection');

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/movies', (req, res) => {
  getAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.writeHead(400);
    res.send('Issue with db')
  })
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
