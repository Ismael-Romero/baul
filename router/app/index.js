const router = require('express').Router();

router.use('/', require('./home'));
router.use('/counter', require('./counter'));
router.use('/dom', require('./dom'));
router.use('/dbapp', require('./dbapp'))

module.exports = router;
