const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
  name: {
    required: true,
    type: String,
    maxlength: 30,
    minlength: 1,
  },
});

module.exports = mongoose.model('user', userSchema);
