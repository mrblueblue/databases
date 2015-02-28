// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// exports.dbConnection = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "chat"
// });

// exports.connect =  function() {exports.dbConnection.connect(function(err) {
//     if ( !err ) {
//         console.log("Connected to MySQL");
//     } else if ( err ) {
//         console.log(err);
//     }
// });
// }

var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");

module.exports = {

  User: sequelize.define('users', {
    username: Sequelize.STRING
  }),

  Message: sequelize.define('messages', {
    username: Sequelize.STRING,
    message: Sequelize.STRING,
    roomname: Sequelize.STRING
  })
};

