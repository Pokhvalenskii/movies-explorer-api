const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');

require('dotenv').config();

const { JWT_TOKEN } = process.env;

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    next(new UnauthorizedError());
  } else {
    let payload;
    try {
      payload = jwt.verify(token, JWT_TOKEN);
    } catch (err) {
      next(new UnauthorizedError());
    }

    req.user = payload;
    next();
  }
};

module.exports = auth;
