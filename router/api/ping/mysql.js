const router = require('express').Router();
const Repository = require('../../../repository/mysql');
const mysql = new Repository();

router.get('/', async (req, res, next) => {
    const db = await mysql.ConnectTo('ping')
    const [rows, fields] = await db.execute('SELECT message FROM ping');

    // db.query('SELECT message FROM ping', function (error, results, fields) {
    //     console.log(error)
    //     res.json({
    //         message: results
    //     });
    // })

    res.status(200).send(rows[0].message)
    db.end()
});

module.exports = router;