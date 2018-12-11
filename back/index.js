const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const admin = require('./db/admin');
const users = require('./db/users');
const products = require('./db/products');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Started at port - ${PORT}`);
});
