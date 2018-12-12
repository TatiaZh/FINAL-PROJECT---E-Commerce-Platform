const express = require('express');
const fs = require('fs');
// const path = require("path");
const router = express.Router();

const Product = require('../models/Product');
const validateProduct = require('../models/Validator').validateProduct;
const productsDB = require('../db/products');

router.route('/').get((req, res) => {
  const productsDB = JSON.parse(fs.readFileSync('db/products.json'));
  res.json(productsDB);
});

router.route('/add').post((req, res) => {
  const product = validateProduct(req.body);
  let productsDB = JSON.parse(fs.readFileSync('db/products.json'));

  if (product.error) {
    return res.status(400).json({ message: product.error });
  }
  for (let prod of productsDB) {
    if (prod.title === product.title) {
      console.log(product.title);
      return res.status(400).json({ message: 'Product already exists' });
    }
  }
  const id = productsDB[productsDB.length - 1].id + 1;
  productsDB.push(new Product({ id, ...product }));
  fs.writeFileSync('db/products.json', JSON.stringify(productsDB, null, 2));
  return res.json(product);
});

router.route('/:id').get((req, res) => {
  const id = req.params.id;
  const productsDB = JSON.parse(fs.readFileSync('db/products.json'));

  const product = productsDB.find(product => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }
  res.json(product);
});

router.route('/:id').put((req, res) => {
  const id = req.params.id;
  let productsDB = JSON.parse(fs.readFileSync('db/products.json'));

  const newProduct = validateProduct(req.body);
  if (newProduct.error) {
    return res.status(400).json({ message: newProduct.error });
  }

  let product = productsDB.find(product => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }

  Product.update(product, { ...newProduct });

  fs.writeFileSync('db/products.json', JSON.stringify(productsDB, null, 2));
  res.json(product);
});

router.route('/:id').delete((req, res) => {
  const productsDB = JSON.parse(fs.readFileSync('db/products.json'));

  const id = req.params.id;
  const product = productsDB.find(product => product.id == id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }

  productsDB.splice(productsDB.indexOf(product), 1);
  fs.writeFileSync('db/products.json', JSON.stringify(productsDB, null, 2));
  res.json(product);
});

router.route('/search/filter').get((req, res) => {
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

  res.json(filteredDB);
});

module.exports = router;
