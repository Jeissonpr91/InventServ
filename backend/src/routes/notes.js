const { Router } = require('express');
const router = Router();

const {getNotes, createNotes, getOneNote, updateNotes, deleteNotes} = require('../controllers/notes.controller');


router.route('/')
    .get(getNotes)
    .post(createNotes)
    

router.route('/:id')  
    .get(getOneNote)
    .put(updateNotes)
    .delete(deleteNotes)
    


module.exports = router;