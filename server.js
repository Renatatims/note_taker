const express = require("express");
const path = require('path');
const app = express();
const PORT = 3001; 

//Uses static files from the '/public/' folder
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Listen for connections
app.listen(PORT, () =>
  console.log("App listening at " + PORT)
);
