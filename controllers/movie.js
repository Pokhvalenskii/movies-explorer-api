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
    .then((movies) => res.send(movies))
    .catch(() => {
      console.log('getUser error');
    });
};

const deleteMovie = (req, res) => {
  const { movieId } = req.params;
  console.log('MOVIE ID',movieId);
  Movie.findOneAndDelete({movieId})
    .then(() => res.status(200).send({message: 'фильм удален!'}))
    .catch(() => {
      console.log('deleteMovie Error');
    })
}

module.exports = {
  createMovie, getMovie, deleteMovie
}