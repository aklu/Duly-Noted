import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import NoteEditPage from "./NoteEditPage";
import useNotes from "../hooks/useNotes";

export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const { notes, deleteNote, updateNote } = useNotes();

    const selectedNote = notes.find((note) => note.id === id);
    if (!selectedNote) return null;

    const handleOnSave = (newNoteText) => {
        updateNote(id, newNoteText);
        history.goBack();
      };
    
      const handleOnDelete = () => {
        deleteNote(id);
        history.goBack();
    };

        
        return (
          <NoteEditPage 
          onSave={handleOnSave} 
          onDelete={handleOnDelete} 
          text={selectedNote.text}/>
        );
}