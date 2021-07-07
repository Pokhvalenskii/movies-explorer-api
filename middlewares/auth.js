const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');

require('dotenv').config();

const { JWT_TOKEN = 'secret', NODE_ENV } = process.env;

const auth = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    next(new UnauthorizedError());
  }
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    next(new UnauthorizedError());
  } else {
    let payload;
    try {
      payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_TOKEN : 'aboba-secret-word');
    } catch (err) {
      next(new UnauthorizedError());
    }

    req.user = payload;
    next();
  }
};

module.exports = auth;
