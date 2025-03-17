var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.get('/createUser', userController.getUserCreatePage);
router.post('/createUser', userController.postUserCreatePage);
 


module.exports = router;
