const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userPhone: String,                         // Identify user
  technicianId: mongoose.Types.ObjectId,     // Link to Serviceman
  technicianName: String,
  paymentMethod: String,                     // 'cash' or 'upi'
  status: { type: String, default: "pending" }, // 'pending', 'confirmed'
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);
