//routes/tripDispatchRouter.js
'use strict';

const express = require('express');
const router = express.Router();
const tripDispatchController = require('../controllers/tripDispatchController');

router.post('/request-ride', tripDispatchController.requestRide);
router.get('/request-status/:id', tripDispatchController.getRequestStatus);


module.exports = router;
