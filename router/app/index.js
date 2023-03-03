const router = require('express').Router();

router.use('/', require('./home'));
router.use('/counter', require('./counter'));
router.use('/dom', require('./dom'));

module.exports = router;
