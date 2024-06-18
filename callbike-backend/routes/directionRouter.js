// routes/directionsRouter.js
const express = require('express');
const router = express.Router();
const directionController = require('../controllers/directionController');

router.post('/get-directions', directionController.getDirections);

module.exports = router;
