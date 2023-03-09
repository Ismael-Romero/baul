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

router.get('/products',async (req, res) => {
    try {
        const db = await mysql.ConnectTo('dbapp');
        const [rows, fields] = await db.execute('SELECT * FROM products');

        res.status(200).send(rows);
        db.end();

    }catch (error){
        res.status(500).send(error);
    }
});

router.post('/product', upload.single('image'), async (req, res) => {

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

    try{
        const db = await mysql.ConnectTo('dbapp');
        const sql = `INSERT INTO products (image, name, price) VALUES ("${image}","${name}",${price})`
        await db.execute(sql);

        res.status(307).redirect('/dbapp/inventory?status=1')

    }catch (error){
        res.status(307).redirect('/dbapp/inventory?status=0')
    }

})

module.exports = router;
