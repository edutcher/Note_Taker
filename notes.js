const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

class Notes {
    getNotes() {
        return JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json')));
    }
    addNote(note) {
        let newNote = {
            id: uuid(),
            ...note
        }
        let db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json')));
        db.push(newNote);
        fs.writeFileSync(path.join(__dirname, 'db/db.json'), JSON.stringify(db));
    }
    delNote(id) {
        let db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json')));
        let newDB = db.filter(note => note.id !== id);
        fs.writeFileSync(path.join(__dirname, 'db/db.json'), JSON.stringify(newDB));
    }
}

module.exports = Notes;