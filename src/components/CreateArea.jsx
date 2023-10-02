import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [show, setShow] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function magic(e) {
    e.preventDefault();
    props.addNote(note);
    setNote({ title: "", content: "" });
    setShow(false);
  }
  function expandfun() {
    setShow(true);
  }

  return (
    <div onMouseOver={expandfun}>
      <form className="create-note">
        {show && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={show ? 3 : 1}
        />
        <Zoom in={show ? true : false}>
          <Fab onClick={magic}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
