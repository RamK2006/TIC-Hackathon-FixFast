const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  title: String,
  message: String,
  button: String,
  userId: mongoose.Types.ObjectId
});
module.exports = mongoose.model('SmartSuggestion', schema);
