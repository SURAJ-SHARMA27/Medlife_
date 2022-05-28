
const mysql = require('mysql2');

const connectDb = mysql.createPool({

    host:'localhost',
    user:'root',
    database:'medlife',
    password:'medlife'
});


module.exports = connectDb.promise();