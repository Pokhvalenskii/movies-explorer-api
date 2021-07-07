const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getMovie, createMovie, deleteMovie } = require('../controllers/movie');

const patternUrl = /(http|https):\/\/[\d\w-]+\.\w.*/;

router.get('/', getMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
<<<<<<< HEAD
    country: Joi.string().required().min(2).max(300),
    director: Joi.string().required().min(2).max(300),
    duration: Joi.number().required().min(1).max(10000),
    year: Joi.string().required().min(1).max(10),
    description: Joi.string().required().min(2).max(3000),
    image: Joi.string().regex(patternUrl).required(),
    trailer: Joi.string().regex(patternUrl).required(),
    nameRU: Joi.string().required().min(2).max(300),
    nameEN: Joi.string().required().min(2).max(300),
=======
    country: Joi.string().required().min(2).max(5000),
    director: Joi.string().required().min(2).max(5000),
    duration: Joi.number().required().min(1).max(10000),
    year: Joi.string().required().min(1).max(10),
    description: Joi.string().required().min(2).max(5000),
    image: Joi.string().regex(patternUrl).required(),
    trailer: Joi.string().regex(patternUrl).required(),
    nameRU: Joi.string().required().min(2).max(5000),
    nameEN: Joi.string().required().min(2).max(5000),
>>>>>>> a60da731773bd06df41e7fb698c82c60f4e08740
    thumbnail: Joi.string().regex(patternUrl).required(),
    movieId: Joi.string().required().min(1).max(100),
  }),
}), createMovie);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().required(),
  }),
}), deleteMovie);

module.exports = router;
