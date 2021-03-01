const fs = require('fs');
const path = require('path');

class Notes {
    getNotes() {
        return JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json')));
    }
    addNote(note) {
        console.log(note);
        let db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json')));
        console.log(db);
        db.push(note);
        console.log(db);
        fs.writeFileSync(path.join(__dirname, 'db/db.json'), JSON.stringify(db));
    }
}

module.exports = Notes;