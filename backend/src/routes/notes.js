const { Router } = require('express');
const router =  Router();

const { getNotes, saveNote, getNote, updateNote, deleteNote } = require('../controllers/notesController')

router.route('/')
    .get(getNotes)
    .post(saveNote)

router.route('/:id') 
    .get(getNote)  
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;