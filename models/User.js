const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  phone: { type: String, unique: true },
  email: String,
  location: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("User", UserSchema);
