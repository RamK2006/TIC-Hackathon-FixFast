const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  aadhar: { type: String, unique: true },
  isVerified: { type: Boolean, default: false }
});
module.exports = mongoose.model('User', userSchema);
