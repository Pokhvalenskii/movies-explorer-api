const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  country: {
    required: true,
    type: String,
    minlength: 2,
<<<<<<< HEAD
    maxlength: 300,
=======
    maxlength: 5000,
>>>>>>> a60da731773bd06df41e7fb698c82c60f4e08740
  },
  director: {
    required: true,
    type: String,
    minlength: 2,
<<<<<<< HEAD
    maxlength: 300,
=======
    maxlength: 5000,
>>>>>>> a60da731773bd06df41e7fb698c82c60f4e08740
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
<<<<<<< HEAD
    maxlength: 3000,
=======
    maxlength: 5000,
>>>>>>> a60da731773bd06df41e7fb698c82c60f4e08740
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
