const router = require('express').Router();

const movieRouter = require('./movie');
const userRouter = require('./users');
const signup = require('./signup');
const signin = require('./signin');
const checkError = require('../middlewares/error');
const auth = require('../middlewares/auth');

router.use('/movies', auth, movieRouter);
router.use('/users', auth, userRouter);
router.use('/signup', signup);
router.use('/signin', signin);
router.use(checkError);


module.exports = router;