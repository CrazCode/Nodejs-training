const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  inc: String,
});

module.exports = mongoose.model('Customer', customerSchema);