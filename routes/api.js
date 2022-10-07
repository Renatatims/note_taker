const fs = require ("fs");
const notesArray = require("../db/db.json");

function noteTaker(app){
    app.get ("/api/notes", function(req, res){
        res.json(notesArray);
    });
}

module.exports = noteTaker; 