const ServerError = require('../errors/server-error');
const ConflictError = require('../errors/conflict-err');
const Forbidden = require('../errors/forbidden-err');
const NotFoundError = require('../errors/not-found-err');

const Movie = require('../models/movie');

const createMovie = (req, res, next) => {
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
    movieId,
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
          .then((responseMovie) => res.send(responseMovie))
          .catch(() => {
            next(new ServerError());
          });
      }
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
  Movie.findOne({ movieId })
    .then((movie) => {
      if (movie) {
        if (JSON.stringify(movie.owner) === JSON.stringify(req.user.id)) {
          Movie.findOneAndDelete({ movieId })
            .then(() => res.status(200).send({ message: 'Фильм удален!' }));
        } else {
          throw new Forbidden();
        }
      } else {
        throw new NotFoundError();
      }
    }).catch(next);
};

module.exports = {
  createMovie, getMovie, deleteMovie,
};
