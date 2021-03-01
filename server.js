const express = require("express");
const path = require('path');
const fs = require("fs");
const Notes = require(path.join(__dirname, '/notes.js'));
let allNotes = new Notes;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})

app.get("/api/notes", (req, res) => {
    res.send(allNotes.getNotes());
    console.log('Heya');
})

app.post("/api/notes", (req, res) => {
    allNotes.addNote(req.body)
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(process.env.port || 3000, () => console.log('Server Started'));