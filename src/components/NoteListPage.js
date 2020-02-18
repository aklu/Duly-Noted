import React, { useState} from "react";
import NoteListItem from "./NoteListItem";
import NoteEditPage from "./NoteEditPage";

const oneHourAgo = Date.now() - (1 * 60 * 60 * 1000);
const sixDaysAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);
const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);
const initialNotes = [
  {
    id: "1",
    createdAt: new Date(oneHourAgo),
    text: "This is a note 1"
  },
  {
    id: "2",
    createdAt: new Date(sixDaysAgo),
    text: "This is a note 2"

  },
  {
    id: "3",
    createdAt: new Date(twoWeeksAgo),
    text: "This is a note 3"

  }
]

export default function NoteListPage() {
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [notes, setNotes] = useState(initialNotes);


  const handleListItemClick = (id) => {
    setSelectedNoteId(id);
  };

  const handleOnSave = (newNoteText) => {
    const updatedNotes = notes.map((note) => {
      if(note.id === selectedNoteId){
        return {
          ...note,
          text: newNoteText
        };
      }
      return note;
    });
    setNotes(updatedNotes);

    setSelectedNoteId(null);
  };

  const handleOnCancel = (clearId) => {
    setSelectedNoteId(null);
  };

  const handleOnDelete = (deleteNotes) => {
    const updatedNotes = notes.filter((note) => note.id !== selectedNoteId);
    setNotes(updatedNotes);
    setSelectedNoteId(null);
};

  if (selectedNoteId) {
    const selectedNote = notes.find((note) => note.id === selectedNoteId);
    return (
      <NoteEditPage 
      onSave={handleOnSave} onCancel={handleOnCancel} onDelete={handleOnDelete} text={selectedNote.text}/>
    );
  }
    return(
      <div className="page">
        <h1>Note List</h1>
        <div className="noteList">
          {
            notes.map((note, index) => {
              return (
                <NoteListItem
                  createdAt={note.createdAt}
                  id= {note.id}
                  key={note.id}
                  onClick={handleListItemClick} 
                  text= {note.text.trim()}
                />
              );
            })
          }
        </div>
      </div>
    );
    }
