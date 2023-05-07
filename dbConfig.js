require("dotenv").config()
const mssql = require("mssql");
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true
  },
  authentication: {
    type: 'default',
    options: {
      userName: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  }
};

module.exports = config;