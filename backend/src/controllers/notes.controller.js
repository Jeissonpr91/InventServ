const notesControl = {};

const noteModel = require('../models/note')

// Muestra un arreglo con todas las notas
notesControl.getNotes = async (req, res) => { 
    const notes = await noteModel.find();
    res.json(notes)
}

// Crea las notas
notesControl.createNotes = async (req, res) => {
    const { title, content, date, author, cantidad } = req.body;
    const newNote = noteModel({
        title: title,
        content: content,
        date: date,
        author: author,
        cantidad: cantidad
    })
    await newNote.save();
    res.json({message: 'Nota Guardada...'})
}

notesControl.getOneNote = async (req, res) => {
    const oneNote = await noteModel.findById(req.params.id)
    res.json(oneNote)
}

notesControl.updateNotes = async (req, res) => {
    const {title, content, author, cantidad} = req.body
    await noteModel.findOneAndUpdate({_id: req.params.id}, {
        title: title,
        content: content,
        author: author,
        cantidad: cantidad
    })
    res.json({message: 'Nota Actualizada...'})
}

notesControl.deleteNotes = async (req, res) => {
    await noteModel.findByIdAndDelete(req.params.id)
    res.json({message: 'Nota Eliminada...'})
}

module.exports = notesControl;