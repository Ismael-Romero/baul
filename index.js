require('dotenv').config()
const Server = require('./server/Server');
const server = new Server(3000);

server.start();