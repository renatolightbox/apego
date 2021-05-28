var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('quemSomos', { title: 'Express' });
  });

  module.exports = router;
