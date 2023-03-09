const mysql = require('mysql2/promise')

class Repository {

    constructor() {
        this.host = process.env.DATABASE_HOST || 'host';
        this.user = process.env.DATABASE_USER || 'foo';
        this.password = process.env.DATABASE_PASSWORD || 'bar';
    }

    ConnectTo(database){
        return mysql.createConnection({
            host: 'localhost',
            user: 'local_manager',
            password: '(@)9176Avrmx',
            database: database
        });
    }
}

module.exports = Repository;