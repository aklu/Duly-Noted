import React from "react";
import PropTypes from "prop-types";


export default function NoteListItem(props) {
    const { id } = props;
    const { text } = props;
    const { dateTimeText } = props;
    const MAX_LENGTH = 200;
    const { onClick } = props;

    return(
      <div className="page">
        <h1>Note List</h1>
        <div className="noteList">
          <div type="button" value = {id} className="noteListItem" onClick={() => onClick(id)} >
         { console.log(id) }

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