const router = require('express').Router()

router.use("/ping/mysql", require('./ping/mysql'))
router.use("/dbapp", require('./dbapp'))

module.exports = router;