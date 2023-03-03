const cors = require('cors');
const express = require('express');

const getPublic = require('../tools/getPublci');

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
        this.app.use('/home', express.static(getPublic('home')));
        this.app.use('/dom', express.static(getPublic('dom')));
        this.app.use('/counter', express.static(getPublic('counter')));
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