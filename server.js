

const express = require('express')
const mysql = require('mysql')
const app = express()

const port = process.env.PORT || 3030;



app.get('/', (req, res) => {
  let mySqlPort = process.env.MYSQL_PORT || "3306"
  let mySqlHost = process.env.MYSQL_HOST || "localhost"
  let mySqlAdm = process.env.MYSQL_USER || "adm"
  let mySqlPassword = process.env.MYSQL_PASSWORD || "adm123"
  let mySqlDatabase = process.env.MYSQL_DATABASE || "investimento"

  let con = { 
    host: mySqlHost,
    port: mySqlPort,
    user: mySqlAdm,
    password: mySqlPassword,
    database: mySqlDatabase
}
  let connection = mysql.createConnection(con);
  console.log(connection)

  connection.connect();
  connection.query("CREATE TABLE usuario")
  connection.end();

})

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`App listening on port ${port}`);
  });

// app.get('/connect', function (req, res) {
//     con.connect(function(err) {
//       if (err) throw err;
//       res.send('connected')
//     });
//   })