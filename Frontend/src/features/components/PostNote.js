import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../notesSlice";
import { useClickedOutside } from "./useClickedOutside";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PostNote = () => {
  const [note, setNote] = useState({
    title: "",
    tagLine: "",
    body: "",
    pinned: false,
  });
  // const showInput = useSelector((state) => state.showInput);
  const [showInput, setShowInput] = useState(false);
  const formElement = useRef();

  useClickedOutside(formElement, () => setShowInput(false));

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title === "" && note.tagLine === "" && note.body === "") {
      setShowInput(false);
      toast.info("Empty note could not be saved!", {
        position: "bottom-right",
      });
      return;
    } else {
      dispatch(addNewNote(note));
      setShowInput(false);
      toast.success("Note saved successfully!", {
        position: "bottom-right",
        theme: "colored",
      });
    }

    setNote({ title: "", tagLine: "", body: "", pinned: false });
  };

  function auto_grow(element) {
    element.style.height = "44px";
    element.style.height = element.scrollHeight + "px";
  }

  return (
    <>
      <div>
        <div className="postnote">
          {showInput ? (
            <form ref={formElement} onSubmit={handleSubmit}>
              <textarea
                id="title"
                name="title"
                rows={1}
                placeholder="Title"
                value={note.title}
                onChange={handleChange}
                onInput={(e) => auto_grow(e.target)}
              ></textarea>
              <textarea
                id="tagLine"
                rows="1"
                name="tagLine"
                placeholder="Tag Line"
                value={note.tagLine}
                onChange={handleChange}
                onInput={(e) => auto_grow(e.target)}
              ></textarea>
              <textarea
                id="body"
                rows="2"
                name="body"
                placeholder="Take a note.."
                value={note.body}
                onChange={handleChange}
                onInput={(e) => auto_grow(e.target)}
                autoFocus={true}
              ></textarea>

              <button className="btn  btn-outline-secondary">Add</button>
            </form>
          ) : (
            <textarea
              rows="1"
              placeholder="Take a note.."
              onClick={() => setShowInput(true)}
              onChange={handleChange}
            ></textarea>
          )}
        </div>
      </div>
    </>
  );
};
