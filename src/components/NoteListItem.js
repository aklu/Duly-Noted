import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactMarkdown from "react-markdown";

dayjs.extend(relativeTime);

function formatDate (date) { 
  if ((Date.now() - (168 * 60 * 60 * 1000)) <= date) {
    date = dayjs(date).fromNow();
  }
  else {
    date = dayjs(date).format("h:m a on M/D/YYYY");
  }
  return date;
};

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick  = () => {},
        text,
      } = props;

    let truncatedText;
    if (text.length > 200) {
      truncatedText = `${text.substr(0, 200)}...`;
    } else {
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