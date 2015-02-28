var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

exports.connect =  function() {exports.dbConnection.connect(function(err) {
    if ( !err ) {
        console.log("Connected to MySQL");
    } else if ( err ) {
        console.log(err);
    }
});
}
