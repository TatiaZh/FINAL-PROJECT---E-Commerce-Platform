const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const productsController = require('./routes/productsController');
const adminController = require('./routes/adminController');
const usersController = require('./routes/usersController');
const cartController = require('./routes/cartController');

const PORT = process.env.PORT || 5000;

app.use(cors('*'));
app.use(express.static(path.join(__dirname, '/back')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/admin', adminController);
app.use('/api/users', usersController);
app.use('/api/users', cartController);
app.use('/api/products', productsController);

app.get('/', (req, res) => {
  res.send('Working...');
});

app.listen(PORT, () => {
  console.log(`Started at port - ${PORT}`);
});
