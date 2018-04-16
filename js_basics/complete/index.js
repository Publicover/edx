const express = require('express');
const database = require('./database');

// Define our application
const app = express();

// Set 'port' value to either an environment value PORT or 3000
app.set('port', process.env.PORT || 3000);

// Where to load the views from
app.set('views', './app/views');
// Which view engine to use
app.set('view engine', 'pug');

// Export static folder (visible to the frontend, under the "/public" path)
app.use("/public", express.static('./public'));

// Create router
var router = require('./router');

// Router listens on / (root)
app.use('/', router);

// Connect to the database, then execute the "callback" function (in this case an anonymous function which starts listening for requests).
database(function(){
    // Start listening for requests on the port defined earlier
    app.listen(app.get('port'), function(){
        console.log("Express server listening on port " + app.get('port'));
        console.log("You application is running. You should be able to connect to it on http://localhost:" + app.get('port') );
    });
});