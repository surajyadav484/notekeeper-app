import { useState } from "react";
import { EditModal } from "./EditModal";

export const DisplayNotes = ({
  _id,
  title,
  tagLine,
  body,
  pinned,
  pinNote,
  handleDeleteNote,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const note = { _id, title, tagLine, body, pinned: !pinned };

  return (
    <>
      <div className="displayNote">
        <div className="display-card" onClick={() => setIsOpen(true)}>
          <h4>{title}</h4>
          <h5>{tagLine}</h5>
          <p>{body}</p>
        </div>
        <div className="icons">
          <i className="fa fa-thumb-tack" onClick={() => pinNote(note)}></i>
          <i className="fa fa-trash" onClick={() => handleDeleteNote(_id)}></i>
        </div>
      </div>
      <EditModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        tagLine={tagLine}
        body={body}
        _id={_id}
        pinned={pinned}
      >
        Hello
      </EditModal>
    </>
  );
};
