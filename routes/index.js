const express = require('express');

const router = express.Router();

const homController = require('../controllers/home-controller');

router.get('/', homController.home);

module.exports = router;