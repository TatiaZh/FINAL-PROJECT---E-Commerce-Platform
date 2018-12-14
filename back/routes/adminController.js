const express = require('express');
const fs = require('fs'); //for files
// const nodemailer = require('nodemailer');   //for sending messages --- work in progress
const router = express.Router();

const Message = require('../models/Message');

// path will be /api/admin/messages
router.route('/messages').get((req, res) => {
  const messagesDB = JSON.parse(fs.readFileSync('db/messages.json'));
  return res.json(messagesDB);
});

// path will be /api/admin/messages
router.route('/messages').post((req, res) => {
  const messagesDB = JSON.parse(fs.readFileSync('db/messages.json'));
  const id = messagesDB[messagesDB.length - 1].id + 1 || 1;
  const message = new Message({ id, ...req.body });
  messagesDB.push(message);
  fs.writeFileSync('db/messages.json', JSON.stringify(messagesDB, null, 2));
  return res.json(message);
});

// path will be /api/admin/messages/{id}     example: /api/admin/messages/2
router.route('/messages/:id').get((req, res) => {
  const messagesDB = JSON.parse(fs.readFileSync('db/messages.json'));
  const id = req.params.id;
  const message = messagesDB.find(message => message.id == id);
  if (!message) {
    return res.status(404).json({ message: 'message not found' });
  }
  return res.json(message);
});

// path will be /api/admin/messages/{id}     example: /api/admin/messages/2
router.route('/messages/:id').delete((req, res) => {
  const messagesDB = JSON.parse(fs.readFileSync('db/messages.json'));
  const id = req.params.id;
  const message = messagesDB.find(message => message.id == id);

  if (!message) {
    return res.status(404).json({ message: 'message not found' });
  }

  messagesDB.splice(messagesDB.indexOf(message), 1);
  fs.writeFileSync('db/messages.json', JSON.stringify(messagesDB, null, 2));

  return res.json(message);
});

module.exports = router;
