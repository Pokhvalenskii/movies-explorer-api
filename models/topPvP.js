const mongoose = require('mongoose');

const topPvPSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
  value: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 20,
  },
});

module.exports = mongoose.model('topPvP', topPvPSchema);
