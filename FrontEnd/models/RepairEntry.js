const mongoose = require("mongoose");

const RepairEntrySchema = new mongoose.Schema({
  title: String,
  date: String,
  status: String,
  userId: String
});

module.exports = mongoose.model("RepairEntry", RepairEntrySchema);
