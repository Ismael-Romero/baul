const router = require('express').Router();

router.use('/', require('./app'))
router.use('/api', require('./api'))

module.exports = router;