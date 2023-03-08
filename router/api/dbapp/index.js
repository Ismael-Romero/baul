const router = require('express').Router();
const multer = require('multer');
const path = require('node:path');

const Repository = require('../../../repository/mysql');
const mysql = new Repository();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/dbapp/public/images')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-image${ext}`;
        cb(null, filename)
    }
})

const upload = multer({storage});

router.get('/products', (req, res, next) => {

    let db = mysql.ConnectTo('dbapp')

    db.query('SELECT * FROM products', (error, results, fields) => {
        if (error) throw error;
        if (!error) {
            res.json(results)
        }
    });

    db.end()
});

router.post('/product', upload.single('image'), (req, res, next) => {

    let name, price, image;

    if (!req.body.name || !req.body.price){
        res.status(307).redirect('/dbapp/inventory?status=0')
        return
    }

    if (req.body.name === '' || parseFloat(req.body.price) < 0){
        res.status(307).redirect('/dbapp/inventory?status=0')
        return
    }

    if (!req.file){
        image = '/dbapp/images/no-available.jpeg';
    }

    name = req.body.name;
    price = parseFloat(req.body.price);
    image = `/dbapp/images/${req.file.filename}`;

    let db = mysql.ConnectTo('dbapp');
    let sql = `INSERT INTO products (image, name, price) VALUES ("${image}","${name}",${price})`
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
    });

    db.end();

    res.status(307).redirect('/dbapp/inventory?status=1')
})

module.exports = router;
