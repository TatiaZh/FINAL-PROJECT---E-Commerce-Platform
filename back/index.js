const express = require('express');
const path = require('path');
const app = express();

const productsController = require('./routes/productsController');

const PORT = process.env.PORT || 5000;

const admin = require('./db/admin');
const users = require('./db/users');

app.use(express.static(path.join(__dirname, '/back')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/products', productsController);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Started at port - ${PORT}`);
});
