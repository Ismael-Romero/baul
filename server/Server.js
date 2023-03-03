const cors = require('cors');
const path = require('node:path');
const express = require('express');

class  Server {

    constructor(port) {
        this.port = port;
        this.app = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false }));

        // The static files are served to the client when they are accessed
        // through their root route followed by the name of the folder and file to be displayed:
        // (EJ:) /home/css/main.css
        this.app.use('/home', express.static(path.join(__dirname, '../app/home/public')));
        this.app.use('/counter', express.static(path.join(__dirname, '../app/counter/public')));
    }

    routes(){
        this.app.use(require('../router'))
    }

    start(){
        this.app.listen(this.port, () => {
            console.log('Server Running')
        });
    }
}

module.exports = Server;