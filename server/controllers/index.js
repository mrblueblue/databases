var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
<<<<<<< HEAD
    console.log('get REQUEST RECEIVED')

     models.messages.get(res);


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = req.body;
      models.messages.post(data);
<<<<<<< HEAD
      res.status(201).send()





    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('POST')

      var data = req.body;

      models.users.post(data);
      res.send()

    }
  }
};

