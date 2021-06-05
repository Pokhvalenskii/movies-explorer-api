const ServerError = require('../errors/server-error');
const ConflictError = require('../errors/conflict-err');

const Movie = require('../models/movie');

const createMovie = (req, res, next) => { //добавление фильма
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
  Movie.findOne({ movieId })
    .then((movie) => {
      if (movie) {
        throw new ConflictError('Этот фильм уже добавлен!', 409);
      } else {
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
          owner: req.user.id,
        })
          .then((movie) => res.send(movie))
          .catch(() => {
            next(new ServerError());
          });
      };
    }).catch(next);
};

const getMovie = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(() => {
      next(new ServerError());
    });
};

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  Movie.findOneAndDelete({movieId})
    .then(() => res.status(200).send({message: 'фильм удален!'}))
    .catch(next);
};

module.exports = {
  createMovie, getMovie, deleteMovie
}