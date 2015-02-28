var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      // var username =
      req.on('data', function (data) {

        var parsed = JSON.parse(data);
        models.messages.post(parsed);


        res.send('END');
      })



    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

