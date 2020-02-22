import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import formatDate from "../util/formatDate";

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick  = () => {},
        text,
      } = props;

    let truncatedText;
    text.trim();
    if (text.length > 200) {
      truncatedText = `${text.substr(0, 200)}...`;
    } 
    else if(text.length < 1)
    {
      truncatedText = "No note text";
    }
    else {
      truncatedText = text;
    }

    const handleItemClick = (event) => {
      event.preventDefault();
      if (onClick) {
        onClick(id);
      }
    }
    
    return(
          <div className="noteListItem" onClick={handleItemClick} >
            <ReactMarkdown source={truncatedText}/>        
            <p> {formatDate(createdAt)} </p>
          </div>
    );
  }

  NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
  };