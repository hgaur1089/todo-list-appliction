const express = require('express');
const router = express.Router();

const deleteListController = require('../controllers/delete-list-controller');

router.get('/deleteList', deleteListController.deleteList);

module.exports = router;