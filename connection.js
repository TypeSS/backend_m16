const config = require("./dbConfig");
const mssql = require("mssql");
const connection = new mssql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Liguei-me à DB!');
    return pool;
  })
  .catch(err => console.log('Correu mal! : ', err));


module.exports = connection;
