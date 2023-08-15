const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');

//newsController.index;
router.use('/search', SiteController.seach);
router.use('/', SiteController.index);


module.exports = router;