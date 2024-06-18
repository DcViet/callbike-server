// controllers/usersController.js
'use strict';

const { validationResult } = require('express-validator');
const models = require('../models');
const controller = {};


controller.addUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { customerId, name, phoneNumber, homeAddress, currentLocation, isDriver, driverId, workStatus } = req.body;

    try {
        // Customer
        await models.Customer.create({
            customerId,
            name,
            phoneNumber,
            homeAddress,
            currentLocation
        });

        // If it's a Driver
        if (isDriver) {
            await models.Driver.create({
                driverId,
                name,
                phoneNumber,
                currentLocation,
                workStatus
            });
        }

        res.redirect('/usersList');
    } catch (error) {
        console.error(error);
        res.status(500).send("Cannot add user!");
    }
};

controller.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        let user = await models.Customer.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Cannot delete user', error });
    }
};

controller.updateUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { name, phoneNumber, homeAddress, currentLocation, isDriver, driverId, workStatus } = req.body;

    try {
        let user = await models.Customer.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = name;
        user.phoneNumber = phoneNumber;
        user.homeAddress = homeAddress;
        user.currentLocation = currentLocation;
        await user.save();

        // If it's a Driver, update Driver details as well
        if (isDriver) {
            let driver = await models.Driver.findOne({ where: { driverId: id } });
            if (driver) {
                driver.name = name;
                driver.phoneNumber = phoneNumber;
                driver.currentLocation = currentLocation;
                driver.workStatus = workStatus;
                await driver.save();
            } else {
                await models.Driver.create({
                    driverId,
                    name,
                    phoneNumber,
                    currentLocation,
                    workStatus
                });
            }
        }

        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Cannot update user', error });
    }
};

module.exports = controller;
