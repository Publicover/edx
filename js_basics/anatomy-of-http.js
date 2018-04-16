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
