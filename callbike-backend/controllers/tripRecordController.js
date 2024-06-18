//controllers/tripRecordController.js
'use strict';

const controller = {};
const models = require('../models');

controller.showTripList = async (req, res) => {
    try {
        const recentTrips = await models.RideRequest.findAll({
            attributes: ['requestId', 'requestTime', 'pickupLocation', 'dropoffLocation', 'status', 'completionTime', 'distance', 'driverRating'],
            order: [['requestId', 'ASC']], // ASC, DESC
            limit: 10
        });
        res.json(recentTrips); //Tra ve file json
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

controller.addTrip = async (req, res) => {
    const { requestId, requestTime, pickupLocation, dropoffLocation, status, completionTime, distance, driverRating, driverId } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!requestId || !requestTime || !pickupLocation || !dropoffLocation || !status || !driverId) {
        return res.status(400).send("All required fields must be filled!");
    }

    try {
        await models.RideRequest.create({
            requestId,
            requestTime,
            pickupLocation,
            dropoffLocation,
            status,
            completionTime,
            distance,
            driverRating,
            driverId
        });

        res.redirect('/tripsList');
    } catch (error) {
        console.error(error);
        res.status(500).send("Cannot add trip!");
    }
};

module.exports = controller;
