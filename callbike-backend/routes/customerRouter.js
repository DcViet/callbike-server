//routes/customerRouter.js
'use strict';

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/customerList', customerController.showCustomerList);

module.exports = router;
