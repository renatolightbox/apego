var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('mural-de-avisos', { title: 'Express' });
  });

  module.exports = router;
