const router = require('express').Router();
const getPage = require('../../../tools/getPage');

router.get('/', (req, res, next) => {
    res.sendFile(getPage('dom/index.html'))
});

module.exports = router;