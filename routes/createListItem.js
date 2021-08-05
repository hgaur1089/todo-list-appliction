const express = require('express');
const router = express.Router();


const createListController = require('../controllers/create-list-controller');

router.post('/createList', createListController.createList); 


module.exports = router;