var db = require('../db');

//Serialize Implementation
module.exports = {
  messages: {
    get: function (res) {

      db.Message.sync().success(function(){
        db.Message.all().success(function(messages){
          messages = JSON.stringify(messages);
          res.status(201).send(messages);
        });
      });

    }, // a function which produces all the messages
    post: function (data) {

      db.Message.sync().success( function() {
        var newMessage = db.Message.build(data);
        newMessage.save().success( function (data) {

          console.log('new entry saved!');
        });


      });
    }  // a function which can be used to insert a message into the database
},

  users: {
    get: function () {},
    post: function (data) {

      db.User.sync().success( function() {

        var newUser = db.User.build(data);
        newUser.save().success( function (data) {

          console.log('saved new user!');
        });

      });

    }
  }
};





// MySQL implementation

// module.exports = {
//   messages: {
//     get: function (res) {
//       db.dbConnection.query('SELECT * FROM messages', function(err, output){
//         if(err){
//           throw err;
//         }else{

//           console.log(output);
//          res.status(200).send(JSON.stringify(output));
//         }
//       });
//     }, // a function which produces all the messages
//     post: function (parsed) {

//       var strQuery = 'INSERT into messages (username, text, roomname) VALUES ("' + parsed.username + '",'+'"'+parsed.message + '","'+parsed.roomname +'")';
//       console.log(strQuery)
//       db.dbConnection.query( strQuery, function(err, rows){
//         if(err) {
//           console.log("SQL ERROR")
//           throw err;
//         }else{
//           console.log( rows );
//         }
//     }); // a function which can be used to insert a message into the database
//   }
// },

//   users: {
//     // Ditto as above.
//     get: function () {},
//     post: function (parsed) {
//       var strQuery = "INSERT into users (username) VALUES ('" + parsed.username +"')";

//       db.dbConnection.query( strQuery, function(err, rows){
//         if(err) {
//           console.log("SQL ERROR")
//           throw err;
//         }else{
//           console.log( rows );
//         }
//       });
//     }
//   }
// };


