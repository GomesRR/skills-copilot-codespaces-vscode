// create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// create comments array
let comments = [
  {
    name: 'John',
    comment: 'Hello everyone!'
  },
  {
    name: 'Jane',
    comment: 'Hi John!'
  }
];

// create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});