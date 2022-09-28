var mysql = require('mysql');
require("dotenv").config()

var con = mysql.createConnection({
  host: "46.229.230.119",
  user: "ne028300",
  password: "BZni97",
  database : "ne028300db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});