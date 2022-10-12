const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteKeeperSchema = new Schema({
  title: { type: String, trim: true },
  tagLine: { type: String, trim: true },
  body: { type: String },
  pinned: false,
});

module.exports = mongoose.model("NoteKeeper", noteKeeperSchema);
