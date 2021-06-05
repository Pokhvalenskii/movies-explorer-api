const router = require('express').Router();

const { getMe, updateMe } = require('../controllers/users');

router.get('/me', getMe);
router.patch('/me', updateMe);
// router.patch('/me', getMovie);

module.exports = router