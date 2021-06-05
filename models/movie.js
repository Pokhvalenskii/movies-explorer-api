const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  country: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  director: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
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
    maxlength: 1000,
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
    maxlength: 1000,
  },
  nameEN: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 1000,
  },
});

module.exports = mongoose.model('movie', movieSchema);
