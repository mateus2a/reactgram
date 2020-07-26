const express = require('express');

const routes = new express.Router();


routes.get('/', (req, res) => {
  res.send('coe');
});


module.exports = routes;