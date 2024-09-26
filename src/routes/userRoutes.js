const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validate, userCreateSchema, userUpdateSchema } = require('../middleware/joiValidator');

// Fetch all users
router.get('/', userController.getAllUsers);

// Fetch a single user by userId
router.get('/:userId', userController.getUserById);

// Create a new user
router.post('/', validate(userCreateSchema), userController.createUser);

// Update user details with validation middleware
router.put('/:userId', validate(userUpdateSchema), userController.updateUser);

// Delete a user
router.delete('/:userId', userController.deleteUser);

module.exports = router;
