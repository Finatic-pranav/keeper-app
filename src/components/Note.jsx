import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import BackspaceIcon from '@mui/icons-material/Backspace';

function Note(props) {
  function onclicked(event) {
    props.func(props.id);
    event.preventDefault();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onclicked}><BackspaceIcon /></button>
    </div>
  );
}

export default Note;
