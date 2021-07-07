const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getMovie, createMovie, deleteMovie } = require('../controllers/movie');

const patternUrl = /(http|https):\/\/[\d\w-]+\.\w.*/;

router.get('/', getMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2).max(300),
    director: Joi.string().required().min(2).max(300),
    duration: Joi.number().required().min(1).max(10000),
    year: Joi.string().required().min(1).max(10),
    description: Joi.string().required().min(2).max(3000),
    image: Joi.string().regex(patternUrl).required(),
    trailer: Joi.string().regex(patternUrl).required(),
    nameRU: Joi.string().required().min(2).max(300),
    nameEN: Joi.string().required().min(2).max(300),
    thumbnail: Joi.string().regex(patternUrl).required(),
    movieId: Joi.number().required().min(1).max(100000),
  }),
}), createMovie);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().required(),
  }),
}), deleteMovie);

module.exports = router;
