const mysql = require('mysql')

class Repository {

    constructor() {
        this.host = process.env.DATABASE_HOST || 'host';
        this.user = process.env.DATABASE_USER || 'foo';
        this.password = process.env.DATABASE_PASSWORD || 'bar';
    }

    ConnectTo(database){
        return mysql.createConnection({
            hots: this.host,
            user: this.user,
            password: this.password,
            database: database
        });
    }
}

module.exports = Repository;