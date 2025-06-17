const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  status: String,
  userId: mongoose.Types.ObjectId
});
module.exports = mongoose.model('RepairEntry', schema);
