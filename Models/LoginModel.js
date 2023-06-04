const sql = require('mssql');
const con = require('../connection');
const bcrypt = require('bcrypt');


    const login = async (user) => {
        const pool = await con;
      
        const email = await pool
          .request()
          .input("email", sql.VarChar(255), user.email)
          .query("SELECT * FROM Utilizadores Where email =  @email");
        const data = email.recordset[0];
      
        if (data == undefined || data == null) {
          
          let resp = {message: "Email não existe" };
          return resp;
        }
        if (await bcrypt.compare(user.password, data.password)) {
          let id = data.id_utilizador;
      
          let resp = { id: id, message: "Login realizado com sucesso" };
      
          return resp;
        } else {
          let resp = {message: "Senha Errada" };
          return resp;
        }
    }

module.exports = {
    login
}