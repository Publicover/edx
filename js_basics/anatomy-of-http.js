most modern href use relative paths
  <img href='image.png'></img>
  <img href='http://example.dellago.com/image.png'></img>
get, post, put, etc
URL 'https://cell.map/assets/images/protein.png'
    https: protocol
    cell.map: host name
    assets/images: location or path
    protein.png: resource

node is event-driven and asynchronous, and it uses callbacks
single-threaded with 1.8g RAM allocated

what does a web app need?
  request handler: Express.js is standard, koa is simplified version of same
    and Restify focuses on REST APIs also based on Express.js
  database: SQLite, PostgreSQL, MySQL are relational
    MongoDB, CouchDB and the like are JSON document stores, non-relational
    Redis, LevelDB are key-value stores, another kind of non-relational
      (key-value allows storing only one key with one datapoint, so they are
      considered good only for small applications)
  view engine: Angular.js: backed by google, part of MEAN stack:
        Mongo, Express, Angular, Node
    React: developed by Facebook
    Pug (previously Jade): powerful and simple templating engine, syntax similar
      to plain HTML file
    Ember: popular with a small group of dedicated devs

express is a framework that handles incoming requests: provides extensible
  layers--responding to user whether they are authenticated or not is an example
MongoDB stores BSON, which is binary-JSON; can store music and images
  it does not have a schema, so objects can differ from one to the next
  in addition to JSON--does not enforce schema out of the box
  "_id" gives a hash instead of an integer in entires
    JSON: {
      "name": "jim",
      "age": "38"
    }
    MONGO: {
      "_id": {
        "$oid": "57657fe0dbca0fldesnn2"
      },
      "name": "jim",
      "age": "38"
    }
    to use MongoDB in node, you need a driver--most common is Mongoose
      allows you to connect to DB, define models (enforce some kind of schema),
        perform queries (find, create, remove, update), connect to DB and
        handle connection events
      CRUD: Create, Read, Update, Destroy
        --> Model.create(), Model.find(), Model.update(), Model.remove
Pug is view engine
  gives a way to define reusable and extendable HTML components
  uses simplified syntax and can use control statements when passing
    variables into the view
  Pug defines blocks, making parts of code extendable

in terminal:
  npm start
    starts the server and the database

PUG front end
  three main parts:
    metadata block (like head of HTML file)
      linked CSS file
    content block
      javascript libraries like d3 or code host
    at top, extend base

event is fired when state of request changes
JSON is returned
  common request:
    var xmlHttp = new XMLHttpRequest
    xmlHttp.onload = function () {
      doSomethingWith(this.responseText);
    };
    xmlHttp.open("GET", 'api/relationships');
    xmlHttp.send();

three ways to visualize data:
  HTML elements, canvas and WebGL, and scalable vector graphics
d3 (data-driven documents) is graphing library and JS library in one
  binding arbitrary data to page elements
  applying data-driven transformations
d3 creates DOM elements or updates or deletes them dynamically based on
  the data it has
  var names = [
    { "name": "A", "group": 1 },
    { "name": "B", "group": 2 },
    { "name": "C", "group": 3 }
  ];
  var relationships = [
    { "source": 0, "target": 2, "value": 5 },
    { "source": 0, "target": 1, "value": 10 },
    { "source": 2, "target": 1, "value": 30 }
  ];

scalable vector graphics (SVG)
  XML-markup based
  SVG elements are part of the DOM
  animation-friendly
  interactive through DOM integration
  renders text and shapes
quick example (gives picture of a triangle)
  <!DOCTYPE html>
  <html>
    <body>
      <svg height="210" width="400">
        <path d="M150 0 L75 200 L225 200 Z" />
      </svg>
    </body>
  </html>

d3 provides graph layouts
  var height = 800;
  var width = 800;

  var forceLayout = d3.layout.force()
    .charge(-220)
    .linkDistance(100)
    .size([height, width]);
on start, the layout initializes various attributes on the associated nodes
  forceLayout.nodes(nodes) //data: relationships in GoT example
    .links(links) //graph: lines between nodes
    .start(); //must be called to start creation
d3 uses CSS selectors and has parallels with HTML
  <div id="root"></div>  ===  var svg = d3.select("#root");
  <div class="root"></div> === var svg = d3.select(".root");

var link = svg.selectAll(".link")
            .data(links);
            .enter()
            .append("lines")
            .attr("class", "link");

SELECTION IN D3
  enter()
    no corresponding DOM element,
  update()
    in data and on site,
  exit()
    renturn every element on DOM without datapoint
d3 allows overriding CSS elements
  style function:
    var link = svg...
      .style("stroke-width", "2pt");
  direct interpolation
    { "source": 0, "target": 2, "weight": 5 };
    var link = svg...
      .style("stroke-width", function (dataPoint) {
        return dataPoint.weight;
      });

d3 responds to events in three stages:
  start event triggers before simulation
  tick event happens to every step of the process
    forceLayout.on("tick", function () { /*do something here*/ });
  end event triggers when simulation is over

addig events to nodes:
  event: respond to mouse clicks by increasing circle radius
    node.on("click", function () {
      d3.select(this)
        .attr("r", 20);
    });
  this can be done with animation or transition
    node.on("click", function () {
      d3.select(this)
        .transition()
        .duration(750)
        .attr("r", 250);
    });
