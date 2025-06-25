const mongoose = require("mongoose");
const ServicemanSchema = new mongoose.Schema({
  name: String,
  phone: { type: String, unique: true },
  email: String,
  location: String,
  verified: Boolean,
  rating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Serviceman", ServicemanSchema);
