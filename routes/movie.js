const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getMovie, createMovie, deleteMovie } = require('../controllers/movie');

const patternUrl = /(http|https):\/\/[\d\w-]+\.\w.*/;

router.get('/', getMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2).max(30),
    director: Joi.string().required().min(2).max(30),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required().min(2).max(500),
    image: Joi.string().regex(patternUrl).required(),
    trailer: Joi.string().regex(patternUrl).required(),
    nameRU: Joi.string().required().min(2).max(30),
    nameEN: Joi.string().required().min(2).max(30),
    thumbnail: Joi.string().regex(patternUrl).required(),
    movieId: Joi.number().required().min(1).max(10),
  }),
}), createMovie);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.number().required().min(1).max(10),
  }),
}), deleteMovie);

module.exports = router;
