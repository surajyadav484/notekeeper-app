const express = require("express");
const NoteKeeper = require("../model/notekeeper");

exports.addNote = async (req, res) => {
  try {
    const { title, tagLine, body, pinned } = req.body;
    const noteKeeper = new NoteKeeper({ title, tagLine, body, pinned });
    const response = await noteKeeper.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await NoteKeeper.find();
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
exports.deleteNotes = async (req, res) => {
  try {
    const { noteId } = req.params;
    const response = await NoteKeeper.findOneAndDelete({ _id: noteId });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

exports.editNote = async (req, res) => {
  try {
    const { _id, title, tagLine, body, pinned } = req.body;
    const note = await NoteKeeper.findById({ _id });
    (note.title = title),
      (note.tagLine = tagLine),
      (note.body = body),
      (note.pinned = pinned);

    const updatedNote = new NoteKeeper(note);
    const response = await updatedNote.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};
