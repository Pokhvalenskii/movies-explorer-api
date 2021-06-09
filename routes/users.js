const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getMe, updateMe } = require('../controllers/users');

const patternEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

router.get('/me', getMe);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2),
    email: Joi.string().regex(patternEmail).required(),
  }),
}), updateMe);

module.exports = router;
