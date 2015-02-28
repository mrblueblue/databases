var express = require('express');
var db = require('./db');
var controllers = require('./controllers');
var cors = require('cors')

//Connect to SQL Server
// db.connect();

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

app.use(cors());

// Set what we are listening on.
app.set("port", 8080);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
// Serve the client files
app.use(express.static(__dirname + "/../client"));


// app.post('/classes/messages', function (req, res) {
//   controllers.messages.post(req, res);
// });

// app.post('/classes/users', function (req, res) {
//   // console.log(typeof req, "req=", req);
//   controllers.users.post(req, res);
// });

