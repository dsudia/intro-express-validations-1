var express = require('express');
var router = express.Router();
var validate = require('../lib/validations');

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
