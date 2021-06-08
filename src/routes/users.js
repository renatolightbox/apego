const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', controller.register);

module.exports = router;
