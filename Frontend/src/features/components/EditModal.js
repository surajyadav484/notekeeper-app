import { useState } from "react";
import { useDispatch } from "react-redux";
import { editNotes } from "../notesSlice";
// import { createPortal } from "react-dom";

export const EditModal = ({
  open,
  onClose,
  _id,
  title,
  tagLine,
  body,
  pinned,
}) => {
  const [editNote, setEditNote] = useState({
    _id,
    title,
    tagLine,
    body,
    pinned,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditNote({ ...editNote, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editNotes(editNote));
    onClose();
  };
  if (!open) return null;

  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          dispatch(editNotes(editNote));
          onClose();
        }}
      ></div>
      <div className="editModal">
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            rows="1"
            id="title"
            name="title"
            placeholder="Title"
            value={editNote.title}
            onChange={handleChange}
          ></textarea>
          <textarea
            type="text"
            id="tagLine"
            name="tagLine"
            rows="1"
            placeholder="Tag Line"
            value={editNote.tagLine}
            onChange={handleChange}
          ></textarea>
          <textarea
            type="text"
            id="body"
            name="body"
            rows="3"
            placeholder="Take a note.."
            value={editNote.body}
            onChange={handleChange}
            autoFocus
          ></textarea>

          <button className="btn btn-outline-secondary">Update</button>
        </form>
        {/* <button onClick={onClose}>Close</button>
        {children} */}
      </div>
    </>
    // document.getElementById("portal")
  );
};
