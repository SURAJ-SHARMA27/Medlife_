
const mysql = require('mysql2');

const connectDb = mysql.createPool({

    host:'bfs7pumfy5ejg101nqxc-mysql.services.clever-cloud.com',
    user:'u34zbtzrxzx5r9x5',
    database:'bfs7pumfy5ejg101nqxc',
    password:'G3RYAwx3WlQuzlVDtVxj'
});


module.exports = connectDb.promise();