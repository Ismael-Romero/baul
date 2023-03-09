const router = require('express').Router();
const Repository = require('../../../repository/mysql');
const mysql = new Repository();

router.get('/', async (req, res, next) => {
    try{
        const db = await mysql.ConnectTo('ping')
        const [rows, fields] = await db.execute('SELECT message FROM ping');

        res.status(200).send(rows);
        db.end();

    }catch (error){
        res.status(500).send(error);
    }
});

module.exports = router;