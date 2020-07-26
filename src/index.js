const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://semana:semana@cluster0.r9dyo.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology:true }
);

app.get('/', (req, res) => {
  return res.send(`Coé`);
});


app.listen(3333);