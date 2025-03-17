var express = require('express');
var router = express.Router();
const { body, validationResult } = require("express-validator");

const users = [
  {
    id: 1,
    name: "Amando",
    email: "man@email.com"
  },
  {
    id: 1,
    name: "Brenndo",
    email: "ben@email.com"
  }
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/newUser', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
