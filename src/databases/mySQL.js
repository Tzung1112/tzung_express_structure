import dotenv from 'dotenv'
dotenv.config();
import mysql from 'mysql'
var mySQL = mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER_NAME,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE_NAME
});
function mysqlConnect() {
    try {
       mySQL.connect(err => {
            if (err) {
                console.log("loi ve MySQL", err.sqlMessage);
            } else {
                console.log("ket noi thanh cong");
            }
        });
    } catch (err) {
        console.log('loi cu phap');
    }
}
mysqlConnect()

mySQL.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

mySQL.end();
module.exports={mysqlConnect}
