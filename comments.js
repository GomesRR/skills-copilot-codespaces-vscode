// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// create comments array
const comments = [];
// create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// create a route to post a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});
// start the server
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});