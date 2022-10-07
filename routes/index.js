const path = require('path');

const indexFile = "../public/index.html"
const notesFile = "../public/notes.html";

function htmlRoutes(app) {
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, indexFile))
  );

  // Serve the notes page
  app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, notesFile))
  );

}

module.exports = htmlRoutes;
