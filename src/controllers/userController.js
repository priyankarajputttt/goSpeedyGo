const userService = require('../services/userService');

// Fetch all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Fetch a user by userId
exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({success : true, data : user});
    } catch (error) {
        res.status(500).json({success : false, message: error.message });
    }
};

// Update user details
exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.userId, req.body);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({success : true, data : user});
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a user by userId
exports.deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
