const router = require('express').Router();

const movieRouter = require('./movie');
const signup = require('./signup');
const checkError = require('../middlewares/error')


router.use('/movies', movieRouter);
router.use('/signup', signup);
router.use(checkError);


module.exports = router;