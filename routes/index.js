var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    title: "Greet",
    added: new Date()
  },
  {
    text: "Hello World!",
    title: "Greet2",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
router.get('/newMessage', function(req, res, next) {
  res.render("messagesForm");
});
router.post('/newMessage', function(req, res, next) {
  const {title, message} = req.body;
  messages.push({ text: message, user: title, added: new Date() });

  res.redirect('/');
});


module.exports = router;
