const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { signin } = require('../controllers/users');

const patternEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().regex(patternEmail).required(),
    password: Joi.required(),
  }),
}), signin);

module.exports = router;
