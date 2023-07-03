import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [createnote, setnote] = React.useState({
    title: "",
    content: ""
  });
  const [textclick, setclick] = React.useState(false);

  function onchanged(event) {
    const { name, value } = event.target;
    setnote((preNote) => {
      return {
        ...preNote,
        [name]: value
      };
    });
  }

  function onclicked(event) {
    props.func(createnote);
    setnote({ title: "", content: "" });
    setclick(false);
    event.preventDefault();
  }

  function ontextclicked(){
    setclick(preclicked => true);
  }

  return (
    <div>
      <form>
        {textclick &&<input
          onChange={onchanged}
          name="title"
          placeholder="Title"
          value={createnote.title}
        />}
        
        <textarea
          onChange={onchanged}
          onClick={ontextclicked}
          name="content"
          placeholder="Take a note..."
          rows={!textclick?"1":"3"}
          value={createnote.content}
        />
        <Zoom in={textclick}>
          <Fab onClick={onclicked} className="fab">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
