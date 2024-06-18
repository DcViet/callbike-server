//validators/userValidators.js
'use strict';

const { body } = require('express-validator');

exports.addUserValidation = [
    body('customerId').notEmpty().withMessage('Customer ID is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('phoneNumber').notEmpty().withMessage('Phone number is required'),
    body('homeAddress').notEmpty().withMessage('Home address is required'),
    body('currentLocation').notEmpty().withMessage('Current location is required'),
    body('isDriver').optional().isBoolean().withMessage('isDriver must be a boolean value'),
    body('driverId').if(body('isDriver').equals('true')).notEmpty().withMessage('Driver ID is required if the user is a driver'),
    body('workStatus').if(body('isDriver').equals('true')).notEmpty().withMessage('Work status is required if the user is a driver')
];

exports.updateUserValidation = [
    body('customerId').notEmpty().withMessage('Customer ID is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('phoneNumber').notEmpty().withMessage('Phone number is required'),
    body('homeAddress').notEmpty().withMessage('Home address is required'),
    body('currentLocation').notEmpty().withMessage('Current location is required'),
    body('isDriver').optional().isBoolean().withMessage('isDriver must be a boolean value'),
    body('driverId').if(body('isDriver').equals('true')).notEmpty().withMessage('Driver ID is required if the user is a driver'),
    body('workStatus').if(body('isDriver').equals('true')).notEmpty().withMessage('Work status is required if the user is a driver')
];
