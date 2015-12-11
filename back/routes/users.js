var express = require('express');
var router = express.Router();
var logger = require('log4js').getLogger('users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  logger.info('Accessing users page');
  res.send('respond with a resource');
});

module.exports = router;
