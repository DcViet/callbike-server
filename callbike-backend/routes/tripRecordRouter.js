//routes/tripRecordRouter.js
'use strict';

const express = require('express');
const router = express.Router();
const tripRecordController = require('../controllers/tripRecordController');

router.get('/tripList', tripRecordController.showTripList);

router.post('/add-trip', tripRecordController.addTrip);


module.exports = router;
