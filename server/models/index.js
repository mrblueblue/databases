var db = require('../db');
// var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (res) {
<<<<<<< HEAD

=======
>>>>>>> 2d4907a772658acbae6c39f5508cee60101dd1ec
      db.dbConnection.query('SELECT * FROM messages', function(err, output){
        if(err){
          throw err;
        }else{
<<<<<<< HEAD
          console.log(output);
         res.status(200).send(JSON.stringify(output));
        }
      });
    }, // a function which produces all the messages
    post: function (parsed) {

      var strQuery = 'INSERT into messages (username, text, roomname) VALUES ("' + parsed.username + '",'+'"'+parsed.message + '","'+parsed.roomname +'")';
      console.log(strQuery)
      db.dbConnection.query( strQuery, function(err, rows){
        if(err) {
          console.log("SQL ERROR")
          throw err;
        }else{
          console.log( rows );
        }
    }); // a function which can be used to insert a message into the database
  }
},

  users: {
    // Ditto as above.
    get: function () {},
    post: function (parsed) {
      var strQuery = "INSERT into users (username) VALUES ('" + parsed.username +"')";

      db.dbConnection.query( strQuery, function(err, rows){
        if(err) {
          console.log("SQL ERROR")
          throw err;
        }else{
          console.log( rows );
        }
      });
    }
  }
};


