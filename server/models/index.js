var db = require('../db');
// var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (callback) {

      db.dbConnection.query('SELECT * FROM messages', function(err, output){
        if(err){
          console.log("SQL didn't get the MSGs")
          throw err;
        }else{
         callback(JSON.stringify(output));
        }
      })


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

      console.log(strQuery)
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


