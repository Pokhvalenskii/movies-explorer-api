const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

const { JWT_TOKEN } = process.env;

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
        throw new ConflictError('Пользователь с таким email уже существует', 409);
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
  const { email, password } = req.body;
  User.findOne({ email }).select('+password')
    .then((user) => {
      if(!user) {
        throw new UnauthorizedError();
      } else {
        bcrypt.compare(password, user.password, ((err, isValid) => {
          if (err) {
            next(new ServerError());
          } 
          if (isValid) {
            const token = jwt.sign({
              id: user._id,
            }, JWT_TOKEN);
            res.status(201).send({message: 'login', token })
          } else {
            next(new UnauthorizedError());
          }
        }));
      };
    }).catch(next);
};

const updateMe = (req, res, next) => {
  User.findByIdAndUpdate(req.user.id,
    { $set: { name: req.body.name, email: req.body.email } },
    { new: true, runValidators: true })
    .then((user) => {
      if (!user) { throw new NotFoundError(); }
      res.send(user);
    })
    .catch(next);
};

const getMe = (req, res, next) => {
  User.findById(req.user.id)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch(next);
};

module.exports = {
  signin, signup, getMe, updateMe,
}