const naampje = require('naampje');

const dbConnection = require('./db.js');

const express = require('express');
const app = express();
const port = 3000;

dbConnection.connect();

app.get('/', async (req, res) => {

  await dbConnection.insert(naampje.name());

  const names = await dbConnection.getAll();

  dbConnection.end();

  let html = '<h1>Full Cycle Rocks! </h1>';

  if (!!names && names.length > 0) {

    html += "<ul>";

    names.forEach(item => {
      html += "<li>" + item.name  + "</li>";
    });

    html += "</ul>";
  }

  res.send(html);
});

app.listen(port, () => {
  console.log(`App ouvindo na porta ${port}`);
});