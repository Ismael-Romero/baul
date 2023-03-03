const router = require('express').Router();

router.use('/', require('./home'))
router.use('/counter', require('./counter'))

module.exports = router;
