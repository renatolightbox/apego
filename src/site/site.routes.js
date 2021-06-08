const express = require('express');
const SiteController = require('./site.controller');
const router = express.Router()

router.get('/menu', SiteController.MenuPage)
router.get('/', SiteController.IndexPage)


module.exports = router;
