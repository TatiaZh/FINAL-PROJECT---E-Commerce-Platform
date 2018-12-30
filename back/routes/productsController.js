const express = require('express');
const fs = require('fs'); // for files
const router = express.Router();

const Product = require('../models/Product');
const validateProduct = require('../models/Validator').validateProduct;

// path will be /api/products
router.route('/').get((req, res) => {
  const productsDB = JSON.parse(fs.readFileSync('db/products.json'));
  return res.json(productsDB);
});

// path will be /api/products
router.route('/').post((req, res) => {
  const product = validateProduct(req.body);
  let productsDB = JSON.parse(fs.readFileSync('db/products.json'));
  console.log(req.body);
  if (product.error) {
    return res.status(400).json({ message: product.error });
  }
  for (let prod of productsDB) {
    if (prod.title === product.title) {
      return res.status(400).json({ message: 'Product already exists' });
    }
  }
  const id = productsDB[productsDB.length - 1].id + 1 || 1;
  productsDB.push(new Product({ id, ...product }));
  fs.writeFileSync('db/products.json', JSON.stringify(productsDB, null, 2));
  return res.json(product);
});

// in case we want to return multiple but specific products.
// for example - handy with cart, this way we avoid sending too many requests
// path will be /api/products/multiple
router.route('/multiple').post((req, res) => {
  const productsDB = JSON.parse(fs.readFileSync('db/products.json'));

  const idArray = req.body.idArray;

  const filteredDB = [];
  for (let id of idArray) {
    const product = productsDB.find(product => product.id == id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `product with id ${id} not found` });
    }
    filteredDB.push(product);
  }

  return res.json(filteredDB);
});

// path will be /api/products/{id} example: /api/products/10
router.route('/:id').get((req, res) => {
  const id = req.params.id;
  const productsDB = JSON.parse(fs.readFileSync('db/products.json'));

  const product = productsDB.find(product => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }
  return res.json(product);
});

// path will be /api/products/{id} example: /api/products/10
router.route('/:id').put((req, res) => {
  let productsDB = JSON.parse(fs.readFileSync('db/products.json'));
  const id = req.params.id;

  let product = productsDB.find(product => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }

  const newProduct = validateProduct(req.body);
  if (newProduct.error) {
    return res.status(400).json({ message: newProduct.error });
  }
  Product.update(product, { ...newProduct });

  fs.writeFileSync('db/products.json', JSON.stringify(productsDB, null, 2));
  return res.json(product);
});

// path will be /api/products/{id}  example: /api/products/10
router.route('/:id').delete((req, res) => {
  const productsDB = JSON.parse(fs.readFileSync('db/products.json'));

  const id = req.params.id;
  const product = productsDB.find(product => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }

  productsDB.splice(productsDB.indexOf(product), 1);
  fs.writeFileSync('db/products.json', JSON.stringify(productsDB, null, 2));
  return res.json(product);
});

// updates reviews and average stars
// path will be /api/products/{id}/reviews   example: /api/products/10/reviews
router.route('/:id/reviews').post((req, res) => {
  let productsDB = JSON.parse(fs.readFileSync('db/products.json'));
  const id = req.params.id;
  const review = req.body.review;
  const avrStars = req.body.avrStars;

  let product = productsDB.find(product => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }

  Product.updateAvrStars(product, avrStars);
  Product.updateReviews(product, review);
  fs.writeFileSync('db/products.json', JSON.stringify(productsDB, null, 2));
  return res.json(product);
});

// updates timesBought and stock
// path will be /api/products/{id}/sold   example: /api/products/10/sold
router.route('/:id/sold').post((req, res) => {
  let productsDB = JSON.parse(fs.readFileSync('db/products.json'));
  const id = req.params.id;
  const timesBought = req.body.timesBought;
  const stock = req.body.stock;

  let product = productsDB.find(product => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }

  Product.updateTimesBought(product, timesBought);
  Product.updateStock(product, stock);
  fs.writeFileSync('db/products.json', JSON.stringify(productsDB, null, 2));
  return res.json(product);
});

// path will be /api/products/filter?query  example: /api/products/filter?title=pickle
router.route('/filter').get((req, res) => {
  const productsDB = JSON.parse(fs.readFileSync('db/products.json'));

  let filteredDB = productsDB;
  const title = req.query.title;
  const priceLow = req.query.priceLow;
  const priceHigh = req.query.priceHigh;
  const stars = req.query.stars;
  const timesBought = req.query.timesBought;

  if (title) {
    filteredDB = filteredDB.filter(product => product.title.includes(title));
    if (filteredDB.length == 0) {
      return res.status(404).json({ message: 'product not found' });
    }
  }

  if (priceLow && priceHigh) {
    filteredDB = filteredDB.filter(
      product => product.price >= priceLow && product.price <= priceHigh
    );
    if (filteredDB.length == 0) {
      return res.status(404).json({ message: 'product not found' });
    }
  }

  if (stars) {
    filteredDB = filteredDB.filter(product => product.avrStars >= stars);
    if (filteredDB.length == 0) {
      return res.status(404).json({ message: 'product not found' });
    }
  }

  if (timesBought) {
    filteredDB = filteredDB.filter(
      product => product.timesBought >= timesBought
    );
    if (filteredDB.length == 0) {
      return res.status(404).json({ message: 'product not found' });
    }
  }

  return res.json(filteredDB);
});

module.exports = router;
