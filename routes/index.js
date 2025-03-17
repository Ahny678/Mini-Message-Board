var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/',indexController.getAllMessages,);
router.get('/newMessage', indexController.getMessageForm);
router.post('/newMessage', indexController.postMessageForm);
router.get('/:messageId/update', indexController.getUpdateMessageForm);
router.post('/:messageId/update', indexController.updateMessageForm);
router.post('/:messageId/delete', indexController.deleteMessage);


module.exports = router;
