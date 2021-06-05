const router = require('express').Router();

const { getMovie, createMovie, deleteMovie} = require('../controllers/movie');

router.get('/', getMovie);
router.post('/', createMovie);
router.delete('/:movieId', deleteMovie);

module.exports = router