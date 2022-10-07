const fs = require ("fs");
const notesArray = require("../db/db.json");

function noteTaker(app){
    // Function to send the user's notes to the Array located in db.json file.
    function writeToFile(notes) {
        notes = JSON.stringify(notes)
        console.log(notes);
        fs.writeFile ("./db/db.json", notes, (err) => {
            err ? console.log(err) : console.log(notes);
        })
    }
    // Get the user's note from the Array and display on the notes path (api/notes)
    app.get("/api/notes", function(req, res){
        res.json(notesArray);
    });
    //Post - user's note is pushed to the array and displayed in the left panel
    app.post ("/api/notes", function (req,res){
        //if statement to create a unique ID to the user's note and it will be shown on the right panel
        if (notesArray.length === 0){
            req.body.id = "0"; 
        } else{
            req.body.id = JSON.stringify(JSON.parse(notesArray[notesArray.length - 1].id) + 1);
           
        }
        notesArray.push (req.body);
        writeToFile (notesArray);
        res.json (req.body);
    });
}

module.exports = noteTaker; 