const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  userImage: { type: String, required: true },
  age: { type: Number, required: true },
  salary: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
