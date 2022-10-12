const express = require("express");
const router = express.Router();
const noteController = require("../controller/notekeeper");

//GET: http://localhost:5000/
router.get("/api/", noteController.getNotes);

//POST: http://localhost:5000/addNote
router.post("/api/addNote", noteController.addNote);

//PUT: http://localhost:5000/editNote
router.put("/api/editNote", noteController.editNote);

//DELETE: http://localhost:5000/delete/
router.delete("/api/delete/:noteId", noteController.deleteNotes);

module.exports = router;
