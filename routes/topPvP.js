const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getTopPvP, createCharacter } = require('../controllers/topPvP');

router.get('/', getTopPvP);

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(20),
    value: Joi.string().required().min(1).max(10),
  }),
}), createCharacter);

module.exports = router;
