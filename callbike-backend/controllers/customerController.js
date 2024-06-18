//controllers/customerController.js
'use strict';

const models = require('../models');
const controller = {};

controller.showCustomerList = async (req, res) => {
    try {
        const recentCustomers = await models.Customer.findAll({
            attributes: ['customerId', 'name', 'phoneNumber', 'homeAddress', 'currentLocation'],
            order: [['customerId', 'ASC']], // ASC, DESC
            limit: 10
        });
        res.json(recentCustomers); // Return JSON

    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

module.exports = controller;