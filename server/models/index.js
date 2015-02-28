var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (parsed) {

      var strQuery = "INSERT into messages (username, text, roomname) VALUES ('" + parsed.username + "',"+"'"+parsed.message + "','"+parsed.roomname +"')";
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
    post: function () {}
  }
};


