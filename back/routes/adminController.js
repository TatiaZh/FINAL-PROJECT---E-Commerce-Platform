const express = require('express');
const fs = require('fs');
const router = express.Router();

// router.route('/users/:id').post((req, res) => {
//   const usersDB = JSON.parse(fs.readFileSync('db/users.json'));
//   res.json(productsDB);
// });

router.route('/messages').get((req, res) => {
  const adminDB = JSON.parse(fs.readFileSync('db/admin.json'));
  const messages = adminDB.messages;
  return res.json(messages);
});

router.route('/messages/:id').get((req, res) => {
  const adminDB = JSON.parse(fs.readFileSync('db/admin.json'));
  const messages = adminDB.messages;
  const id = req.params.id;
  const message = messages.find(message => message.id == id);
  return res.json(message);
});



module.exports = router;
