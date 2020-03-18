import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import NoteEditPage from "./NoteEditPage";
import useNotes from "../hooks/useNotes";

export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const { notes, deleteNote, updateNote, archiveNote } = useNotes();

    const selectedNote = notes.find((note) => note.id === id);
    if (!selectedNote) return null;

    // function presentAlertConfirm() {
    //   const alert = document.createElement('ion-alert');
    //   alert.header = 'Confirm!';
    //   alert.message = t('alertMessage');
    //   alert.buttons = [
    //     {
    //       text: t("alertCancel"),
    //       role: 'cancel',
    //       cssClass: 'secondary'
    //     }, {
    //       text: t("alertConfirm"),
    //       handler: () => {
    //         deleteNote(id);
    //         history.goBack();;
    //       }
    //     }
    //   ];
    // }

    const handleOnSave = (newNoteText) => {
      newNoteText = newNoteText.trim();
      if(newNoteText === ""){
        deleteNote(id);
        history.goBack();
      }
      else{
        updateNote(id, newNoteText);
        history.goBack();
      }
      };
      const handleOnDelete = () => {
        deleteNote(id);
        history.goBack();
    };

    const handleOnArchive = () => {
      archiveNote(id);
    }

        return (
          <NoteEditPage 
          onSave={handleOnSave} 
          onDelete={handleOnDelete} 
          onArchive={handleOnArchive}
          text={selectedNote.text}
          />
        );

}