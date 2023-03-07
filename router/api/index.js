const router = require('express').Router()

router.use("/ping/mysql", require('./ping/mysql'))

module.exports = router;