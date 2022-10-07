const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

//Routes//
const apiRoute = require("./routes/api.js");
const htmlRoute = require("./routes/index.js");

//Uses static files from the '/public/' folder
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connects the path from API and Html routes.
apiRoute(app);
htmlRoute(app);

// Listen for connections
app.listen(PORT, () =>
  console.log("App listening at " + PORT)
);

//Html Routes - notes.html and index.html
//API Routes - GET - /api/notes - should read db.json and POST should receive a new note
