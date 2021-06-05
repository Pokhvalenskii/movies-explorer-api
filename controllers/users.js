const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

const NotFoundError = require('../errors/not-found-err');
const UnauthorizedError = require('../errors/unauthorized-err');
const ServerError = require('../errors/server-error');
const ConflictError = require('../errors/conflict-err');
const BadRequestError = require('../errors/bad-request-err');

const signup = (req, res, next) => {
  const {
    email,
    password,
    name,
  } = req.body;
  User.findOne({ email })
    .then((user) => {
      if(user) {
        throw new ConflictError();
      } else {
        bcrypt.hash(password, 10)
          .then((hash) => {
            User.create({
              email,
              name,
              password: hash,
            })
              .then(() => res.status(201).send({message: 'Регистрация пройдена!'}))
          })
      }
    }).catch(next);
};

const signin = (req, res, next) => {

}

module.exports = {
  signin, signup,
}