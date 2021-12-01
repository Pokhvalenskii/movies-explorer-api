const ServerError = require('../errors/server-error');

const topPvP = require('../models/topPvP');

const getTopPvP = (req, res, next) => {
  topPvP.find({})
    .then((statistic) => {
      console.log('flag', statistic);
      return res.send(statistic);
    })
    .catch(() => {
      next(new ServerError());
    });
};

const createCharacter = (req, res, next) => {
  const { name, value } = req.body;
  console.log('flag create', req);
  topPvP.create({
    name,
    value,
  })
    .then((response) => res.send(response))
    .catch(() => {
      next(new ServerError());
    });
};

module.exports = {
  getTopPvP,
  createCharacter,
};
