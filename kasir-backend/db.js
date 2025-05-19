const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql-ea4ab7d-rvlionxz.k.aivencloud.com',
  user: 'avnadmin',
  password: process.env.DB_PASSWORD,
  database: 'db_kasir',
  port: 19846,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
