const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { signup } = require('../controllers/users');

const patternEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().regex(patternEmail).required(),
    name: Joi.string().required().min(2),
    password: Joi.string().required().min(2),
  }),
}), signup);

module.exports = router;
