const router = require('express').Router();
const Repository = require('../../../repository/mysql');
const mysql = new Repository();

router.get('/', (req, res, next) => {
    const db = mysql.ConnectTo('ping')
    db.query('SELECT message FROM ping', (err, rows, fields) => {
        if (err) throw err;
        if (!err) {
            res.status(200).send(rows)
        }
    })
});

module.exports = router;