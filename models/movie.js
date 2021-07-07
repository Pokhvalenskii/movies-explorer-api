const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  country: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 5000,
  },
  director: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 5000,
  },
  duration: {
    required: true,
    type: Number,
  },
  year: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 5000,
  },
  image: {
    required: true,
    type: String,
  },
  trailer: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  owner: {
    required: true,
    type: String,
  },
  movieId: {
    required: true,
    type: String,
  },
  nameRU: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 5000,
  },
  nameEN: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 5000,
  },
});

module.exports = mongoose.model('movie', movieSchema);
