const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const url = 'https://fantasy.premierleague.com/api/entry/98757/';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({ error: 'Error fetching data' });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});