const router = require('express').Router();
const Repository = require('../../../repository/mysql');
const mysql = new Repository();

router.get('/', (req, res, next) => {
    let db = mysql.ConnectTo('ping')

    db.query('SELECT message AS message FROM ping LIMIT 1', function (error, results, fields) {
        res.json({
            message: results[0].message
        });
    })

    db.end()
});

module.exports = router;