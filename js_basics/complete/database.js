// Get configuration for database connection and require mongoose to instantiate the connection
const config    = require('./config');
const mongoose  = require('mongoose');

//Create the DB connection string
const databaseParameters = config.database;
var dbConnection = "mongodb://";

// If the connection requires a username and password
if (databaseParameters.username && databaseParameters.password  && databaseParameters.username.length > 0 && databaseParameters.password.length > 0) {
    dbConnection += databaseParameters.username + ":" + databaseParameters.password + "@";
}
dbConnection += databaseParameters.host + ":" + databaseParameters.port + "/" + databaseParameters.collection;

// Requiring this module will be in function fashion (look at index.js)
module.exports = function(callback){
    mongoose.connect(dbConnection);
    var db = mongoose.connection;

    // CONNECTION EVENTS: When successfully connected
    db.on('connected', function () {
        console.log('Mongoose connected');
    });

    // If the connection throws an error
    db.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
        process.exit(1);
    });

    // When the connection is disconnected
    db.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
        process.exit(1);
    });

    db.on('open', function () {
        // This is the crucial part: the function doesn't return a value, as the connection is an asynchronous event
        // Instead it will execute a callback function passed as parameter of the require, which will accept one parameter being the connection
        callback(mongoose);
    });
}