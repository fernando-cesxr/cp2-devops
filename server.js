import express from 'express'
import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'mysql_server',
    user: 'adm',
    password: 'adm123',
    database: 'investimento' 
})


const express = require('express')
const app = express()

const port = process.env.PORT || 3030;

con.connect();

app.get('/', (req, res) => res.send('Hello from Container!'))

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