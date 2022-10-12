import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../notesSlice";
import { DisplayNotes } from "./DisplayNotes";
import { editNotes, deleteNote } from "../notesSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const pinNote = (note) => {
    dispatch(editNotes(note));
    if (note.pinned)
      toast.success("Note Pinned on top", { position: "bottom-right" });
    else
      toast.success("Note Unpinned from top", {
        position: "bottom-right",
      });
  };

  const handleDeleteNote = (_id) => {
    dispatch(deleteNote({ _id }));
    toast.error("Note Deleted", {
      position: "bottom-right",
      theme: "colored",
    });
  };

  const pinnedNotes = notes?.filter((note) => note.pinned === true);
  const otherNotes = notes?.filter((note) => note.pinned === false);

  const displayPinnedNotes = pinnedNotes?.map((note) => (
    <DisplayNotes
      {...note}
      key={note._id}
      pinNote={pinNote}
      handleDeleteNote={handleDeleteNote}
    />
  ));
  const displayOtherNotes = otherNotes?.map((note) => (
    <DisplayNotes
      {...note}
      key={note._id}
      pinNote={pinNote}
      handleDeleteNote={handleDeleteNote}
    />
  ));

  if (pinnedNotes.length > 0 && otherNotes.length > 0) {
    return (
      <>
        <div className="ms-4">Pinned Notes</div>
        <div className="allNotes">{displayPinnedNotes}</div>
        <div className="ms-4">Other Notes</div>
        <div className="allNotes">{displayOtherNotes}</div>
      </>
    );
  } else if (pinnedNotes.length > 0) {
    return (
      <>
        <div>Pinned Notes</div>
        <div className="allNotes"> {displayPinnedNotes}</div>;
      </>
    );
  } else {
    return <div className="allNotes">{displayOtherNotes}</div>;
  }
};
