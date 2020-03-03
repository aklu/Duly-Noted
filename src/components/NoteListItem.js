import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { IonItem, IonLabel } from "@ionic/react";
import formatDate from "../util/formatDate";
import formatNoteItemText from "../util/formatNoteItemText";

export default function NoteListItem(props) {
    const {
        createdAt,
        id,
        onClick  = () => {},
        text,
        isArchived = false
      } = props;

    const handleItemClick = (event) => {
      event.preventDefault();
      if (onClick) {
        onClick(id);
        console.log(isArchived);
      }
    }
    
    return(
          <IonItem onClick={handleItemClick} >
            <IonLabel>
              <ReactMarkdown source={formatNoteItemText(text)}/>        
              <p> {formatDate(createdAt)} </p>
            </IonLabel>
          </IonItem>
    );
  }

  NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isArchived: PropTypes.bool,
    text: PropTypes.string.isRequired
  };