const express = require('express');
const fs = require('fs');
const crypto = require('crypto');
const router = express.Router();

const User = require('../models/User');
const validateUser = require('../models/Validator').validateUser;
const validateAdminUser = require('../models/Validator').validateAdminUser;
const validateLogin = require('../models/Validator').validateLogin;
const validatePayment = require('../models/Validator').validatePayment;

const secret = 'secret_password';

// for passwords
const encrypt = data => {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(data)
    .digest('hex');
  return hash;
};

// path will be /api/users
router.route('/').get((req, res) => {
  const usersDB = JSON.parse(fs.readFileSync('db/users.json'));
  return res.json(usersDB);
});

// path will be /api/users/register
router.route('/register').post((req, res) => {
  req.body.password = req.body.newPassword;
  const user = validateUser(req.body);
  user.password = encrypt(user.password);
  let usersDB = JSON.parse(fs.readFileSync('db/users.json'));

  if (user.error) {
    return res.status(400).json({ message: user.error });
  }
  for (let usr of usersDB) {
    if (usr.email === user.email || usr.username === user.username) {
      return res
        .status(400)
        .json({ message: 'User with this email or username already exists' });
    }
  }

  const id = usersDB[usersDB.length - 1].id + 1 || 1;
  usersDB.push(new User({ id, ...user }));
  fs.writeFileSync('db/users.json', JSON.stringify(usersDB, null, 2));
  return res.json(user);
});

// path will be /api/users/login
router.route('/login').post((req, res) => {
  let usersDB = JSON.parse(fs.readFileSync('db/users.json'));

  let { username, password } = req.body;
  password = encrypt(password);
  const user = usersDB.find(
    user => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(404).json({ message: 'incorrect username or password' });
  }

  return res.json(user);
});

// path will be /api/users/{id} example: /api/users/10
router.route('/:id').get((req, res) => {
  const id = req.params.id;
  const usersDB = JSON.parse(fs.readFileSync('db/users.json'));

  const user = usersDB.find(user => user.id == id);
  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }
  return res.json(user);
});

// path will be /api/users/{id} example: /api/users/10
router.route('/:id').put((req, res) => {
  const id = req.params.id;
  const usersDB = JSON.parse(fs.readFileSync('db/users.json'));

  const user = usersDB.find(user => user.id == id);
  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }
  if (req.body.oldPassword && encrypt(req.body.oldPassword) !== user.password) {
    return res.status(400).json({ message: 'wrong password' });
  }

  let newUser;
  if (user.isAdmin) {
    if (req.body.newPassword) {
      req.body.password = encrypt(req.body.newPassword);
    }
    newUser = validateAdminUser(req.body);
  } else {
    const username = req.body.username;
    if (username) {
      if (!(typeof username === 'string' || username instanceof String)) {
        return res.status(404).json({
          message:
            'user must have username property and it must be in string format'
        });
      } else {
        console.log('hey');
        User.updateUserName(user, username);
        fs.writeFileSync('db/users.json', JSON.stringify(usersDB, null, 2));
        return res.json(user);
      }
    }
    newUser = validateUser(req.body);
  }
  if (newUser.error) {
    return res.status(400).json({ message: newUser.error });
  }
  User.update(user, { ...newUser });

  fs.writeFileSync('db/users.json', JSON.stringify(usersDB, null, 2));
  return res.json(user);
});

// path will be /api/users/{id} example: /api/users/10
router.route('/:id').delete((req, res) => {
  const usersDB = JSON.parse(fs.readFileSync('db/users.json'));

  const id = req.params.id;
  const user = usersDB.find(user => user.id == id);
  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  usersDB.splice(usersDB.indexOf(user), 1);
  fs.writeFileSync('db/users.json', JSON.stringify(usersDB, null, 2));
  return res.json(user);
});

router.route('/:id/payment').post((req, res) => {
  const id = req.params.id;
  const usersDB = JSON.parse(fs.readFileSync('db/users.json'));

  const user = usersDB.find(user => user.id == id);
  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  const { balance, products } = validatePayment(req.body);
  User.updateBalance(user, balance);
  User.updatebroughtProducts(user, products);

  fs.writeFileSync('db/users.json', JSON.stringify(usersDB, null, 2));
  return res.json(user);
});

module.exports = router;
