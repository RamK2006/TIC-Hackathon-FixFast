const mongoose = require('mongoose');
const techSchema = new mongoose.Schema({
  name: String,
  phone: String,
  skill: String,
  rating: Number,
  lat: Number,
  lng: Number,
  isVerified: { type: Boolean, default: true }
});
module.exports = mongoose.model('Technician', techSchema);
