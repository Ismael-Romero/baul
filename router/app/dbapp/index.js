const router = require('express').Router();
const getPage = require('../../../tools/getPage');

router.get('/', (req, res, next) => {
    res.sendFile(getPage('dbapp/index.html'))
});

router.get('/inventory', (req, res, next) => {
    res.sendFile(getPage('dbapp/inventory.html'))
});

module.exports = router;