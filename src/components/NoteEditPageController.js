import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import NoteEditPage from "./NoteEditPage";
import useNotes from "../hooks/useNotes";
import { useTranslation } from "react-i18next";

export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const { notes, deleteNote, updateNote, archiveNote } = useNotes();
    const { t } = useTranslation();

    const selectedNote = notes.find((note) => note.id === id);
    if (!selectedNote) return null;

    function presentAlertConfirm() {
      const alert = document.createElement('ion-alert');
      alert.header = 'Confirm!';
      alert.message = t('alertMessage');
      alert.buttons = [
        {
          text: t("alertCancel"),
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: t("alertConfirm"),
          handler: () => {
            deleteNote(id);
            history.goBack();;
          }
        }
      ];
      document.body.appendChild(alert);
      return alert.present();
    }

    const handleOnSave = (newNoteText) => {
      newNoteText = newNoteText.trim();
      if(newNoteText === ""){
        // deleteNote(id);
        // history.goBack();;
      }
      else{
        updateNote(id, newNoteText);
        history.goBack();
      }
      };
      const handleOnDelete = () => {
        presentAlertConfirm()
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