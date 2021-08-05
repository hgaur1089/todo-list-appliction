const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home-controller');

router.get('/', homeController.home); 
router.use('/create-list', require('./createListItem'));

module.exports = router;