import React, { useState }from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactMarkdown from "react-markdown";

dayjs.extend(relativeTime);

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick  = () => {},
        text,
      } = props;

    const [timesClicked, setTimesClicked] = useState(0);

    let truncatedText;
    if (text.length > 200) {
      truncatedText = `${text.substr(0, 200)}...`;
    } else {
      truncatedText = text;
    }

    function formatDate (date) { 
      if ((Date.now() - (168 * 60 * 60 * 1000)) <= date) {
        date = dayjs(date).fromNow();
      }
      else if ((Date.now() - (168 * 60 * 60 * 1000)) > date) {
        date = dayjs(date).format("h:m a on M/D/YYYY");
      }
      return date;
    };

    const handleItemClick = (event) => {
      event.preventDefault();
      setTimesClicked(timesClicked + 1);
      if (onClick) {
        onClick(id);
      }
    }

    return(
      <div className="noteListItem">
        <div className="noteList">
          <div className="noteListItem" onClick={handleItemClick} >
            <ReactMarkdown source={truncatedText}/>        
            <p> {formatDate(createdAt)} </p>
            <p>Ive been clicked {timesClicked} times</p>
          </div>
        </div>
      </div>
    );
  }

  NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
  };