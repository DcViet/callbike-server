//routes/rideRouter
const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

// Định nghĩa các routes
router.post('/request-ride', rideController.requestRide);
router.get('/request-status/:id', rideController.getRequestStatus);

module.exports = router;
