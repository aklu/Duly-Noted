import React, { useState } from "react";
import PropTypes from "prop-types";

 export default function NoteEditPage(props) {
    const { onSave, text, onCancel, onDelete } = props;
    const [value, setValue] = useState(text);
    
    return(
      <div className="page">
        <h1>Note Edit</h1>
        <textarea value={value} onChange={(event) => setValue(event.target.value)}/>
        <button type="button" onClick={() => onSave(value)}>Save</button>
        <button type="button" onClick={() => onCancel(value)}>Cancel</button>
        <button type="button" onClick={() => onDelete(value)}>Delete</button>
      </div>
    );
  }

  NoteEditPage.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  };