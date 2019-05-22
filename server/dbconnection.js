const mysql = require("mysql");
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'nci1234$$',
    database: 'testdb'
});

module.exports=connection;