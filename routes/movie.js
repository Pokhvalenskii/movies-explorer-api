const router = require('express').Router();

const { getMovie, createMovie } = require('../controllers/movie');

router.post('/', createMovie);

module.exports = router