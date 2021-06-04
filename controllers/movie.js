const Movie = require('../models/movie');

const owner = '_id1234'

const createMovie = (req, res) => { //добавление фильма
  const {
    country, 
    director, 
    duration, 
    year, 
    description, 
    image, 
    trailer, 
    nameRU, 
    nameEN,
    thumbnail, 
    movieId
  } = req.body;
  
  Movie.create({
    country, 
    director, 
    duration, 
    year, 
    description, 
    image, 
    trailer, 
    nameRU, 
    nameEN,
    thumbnail, 
    movieId,
    owner: owner
  })
  console.log(req.body, 'createMovie');
};

const getMovie = (req, res) => {
  Movie.find({})
    .then((users) => res.send(users))
    .catch(() => {
      console.log('getUser error');
    });
};


module.exports = {
  createMovie, getMovie
}