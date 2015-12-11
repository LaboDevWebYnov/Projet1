var express = require('express');
var router = express.Router();
var logger = require('log4js').getLogger('index');

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info('Accessing index page');
  res.render('index', { title: 'Express' });
});

module.exports = router;
