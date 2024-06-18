//controllers/driverController.js
'use strict';

const models = require('../models');
const controller = {};

controller.showDriverList = async (req, res) => {
    try {
        const recentDrivers = await models.Driver.findAll({
            attributes: ['driverId', 'name', 'phoneNumber', 'workStatus', 'currentLocation'],
            order: [['driverId', 'ASC']], 
            limit: 10
        });
        res.json(recentDrivers); 

    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

module.exports = controller;