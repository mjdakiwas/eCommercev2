import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql
    .createPool({
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        user: process.env.MYSQLUSER,
        database: process.env.MYSQLDATABASE,
        password: process.env.MYSQLPASSWORD,
    })
    .promise();

export default pool;
