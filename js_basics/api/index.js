const express = require('express');
const database = require('./database');

// Define our application
const app = express();

// Set 'port' value to either an environment value PORT or 3000
app.set('port', process.env.PORT || 3000);

// Create router
var router = require('./router');

// Router listens on / (root)
app.use('/', router);

// Connect to the database, then execute the "callback" function (in this case an anonymous function which start listening for requests).
database(function(){
    // Start listening for requests on the port defined earlier
    app.listen(app.get('port'), function(){
        console.log("Express server listening on port " + app.get('port'));
        console.log("You application is running. You should be able to connect to it on http://localhost:" + app.get('port') + "/api/relationships" );
    });
});