const router = require('express').Router();
const cors = require('cors');
const movieRouter = require('./movie');
const userRouter = require('./users');
const signup = require('./signup');
const signin = require('./signin');
const checkError = require('../middlewares/error');
const auth = require('../middlewares/auth');
const notFound = require('../middlewares/notFound');
const { reqLogger, errLogger } = require('../middlewares/logger');

router.use(reqLogger);
router.use(cors());
<<<<<<< HEAD

=======
>>>>>>> a60da731773bd06df41e7fb698c82c60f4e08740
router.use('/movies', auth, movieRouter);
router.use('/users', auth, userRouter);
router.use('/signup', signup);
router.use('/signin', signin);
router.use('*', notFound);
router.use(errLogger);

router.use(checkError);

module.exports = router;
