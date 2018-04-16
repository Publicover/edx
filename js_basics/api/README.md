# Simple Data Visualization node example

To run:

1. Install [Node and NPM](https://nodejs.org/en/)
2. Run `npm install` from within this fodler
3. Run `node index.js` to start the application and have it run on `localhost:3000`


- In the `config.json` you can change the connection parameters to a mongo instance of your likings.
- The `package.json` defines the application's dependencies, name, description, license, ASO.
- The files in the subfolder `app` represent the logic of the application, the server-side javascript and the views
- The files in the subfolder `public` are available to the frontend and contain style and javascript scripts executed in the browser
- The various files in the root (`index.js`, `database.js`, `router.js`) also represent the application's logic in the server-side, but are conceputally different then controllers, models or views (thus exist in a different folder) and perform more self-contained tasks