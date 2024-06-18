//routes/userRouter.js
'use strict';

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { addUserValidation, updateUserValidation } = require('../validators/userValidators');

router.post('/add-user', addUserValidation, usersController.addUser);

router.put('/update-user/:id', updateUserValidation, usersController.updateUser);

router.delete('/delete-user/:id', usersController.deleteUser);

module.exports = router;
