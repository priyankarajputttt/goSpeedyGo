const User = require('../models/User');

// Fetch all users
exports.getAllUsers = async () => {
  return await User.find({});
};

// Fetch a user by userId
exports.getUserById = async (userId) => {
  return await User.findOne({ userId });
};

exports.createUser = async (userData) => {
    const existingUser = await User.findOne({ userId: userData.userId });
  
    if (existingUser) {
      // If the user already exists, throw error
      throw Error(`User with the userId - ${userData.userId} already exists`);
    }
  
    // If the user doesn't exist, create the new user
    const user = new User(userData);
    return await user.save();
  };

// Update user details
exports.updateUser = async (userId, updateData) => {
  return await User.findOneAndUpdate({ userId }, updateData, { new: true });
};

// Delete a user by userId
exports.deleteUser = async (userId) => {
  return await User.findOneAndDelete({ userId });
};
