const mongoose = require('mongoose');

const fromSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const from_Secma = mongoose.model('from_Secma', fromSchema);
module.exports = from_Secma;
