//routes/driverRouter.js
'use strict';

const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.get('/driverList', driverController.showDriverList);

module.exports = router;
