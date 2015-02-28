var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {

    // console.log('from messages get', models.messages.get());

     models.messages.get(res.send);
     // res.send(output)

    }, // a function which handles a get request for all messages
    post: function (req, res) {

      // var username =
      var data = req.body;

      console.log(data)

      models.messages.post(data);
      res.send()




    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('POST')

      var data = req.body;

      console.log(data)

      models.users.post(data);
      res.send()

      // req.on('data', function (data) {

      //   // var parsed = JSON.parse(data);
      //   console.log("users data=", data)
      //   models.users.post(data);

      // req.on('end', function(){
      //   res.send('END');
      // })

      // })

    }
  }
};

