const path = require('path');
const indexFile = require ('../public/index.html');
const notesFile = require ('../public/notes.html');

function htmlRoutes (app){
    app.get ('/', (req, res) => 
    res.sendFile (indexFile));

    app.get ('/notes', (req,res) =>
    res.sendFile (notesFile));
    
}

module.exports = htmlRoutes;
