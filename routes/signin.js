const router = require('express').Router();

const { signin } = require('../controllers/users');

router.use('/', signin);

module.exports = router;