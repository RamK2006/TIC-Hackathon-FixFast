const mongoose = require("mongoose");

const RepairEntrySchema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },      // ✅ Store as real Date object
  status: String,
  userId: { type: mongoose.Types.ObjectId, ref: "User" } // ✅ Proper relation to user
});

module.exports = mongoose.model("RepairEntry", RepairEntrySchema);
