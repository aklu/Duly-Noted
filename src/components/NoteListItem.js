import React from "react";
import PropTypes from "prop-types";


export default function NoteListItem(props) {
    const {
        dateTimeText,
        id,
        onClick  = () => {},
        text,
        MAX_LENGTH
      } = props;

    return(
      <div className="noteListItem">
        <h1>Note List</h1>
        <div className="noteList">
          <div type="button" className="noteListItem" onClick={() => onClick(id)} >
          {text.length > MAX_LENGTH ?
            (
            <div>
                {`${text.substring(0, MAX_LENGTH)}...`}
            </div>
            ) :
        <p>{text}</p>  
        }            
      <p> {dateTimeText} </p>
          </div>
        </div>
      </div>
    );
  }

  NoteListItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    dateTimeText: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };