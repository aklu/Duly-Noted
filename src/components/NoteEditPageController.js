import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import NoteEditPage from "./NoteEditPage";
// import useNotes from "../hooks/useNotes";

const GET_ONE_NOTE = gql`
  query note($id: ID!){
    note(id: $id) {
      id
      createdAt
      isArchived
      text
    }
  }
`;

const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`;

const UPDATE_NOTE = gql`
  mutation updateNote($id: ID!, $note: UpdateNoteInput!) {
    updateNote(id: $id, note: $note) {
      id
      text
      isArchived
    }
  }
`;

const GET_NOTES = gql`
  {
    notes(includeArchived: true) {
      id
      createdAt
      isArchived
      text
    }
  }
`;

export default function NoteEditPageController() {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    onCompleted(data) {
      if (data && data.deleteNote) {
        history.goBack();
      }
    },
    refetchQueries: [
      {
        query: GET_NOTES
      }
    ]
  });

  const [updateNote] = useMutation(UPDATE_NOTE, {
    onCompleted(data) {
      if (data && data.updateNote) {
        history.goBack();
      }
    },
    refetchQueries: [
      {
        query: GET_NOTES
      }
    ]
  });
    const { id } = useParams();
    const history = useHistory();
    const { data, error, loading } = useQuery(GET_ONE_NOTE, {
      variables: {
        id
      }
    });
   

    if (loading) {
      return "Loading..."; //TODO: eventually show a loading spinner
    }
  
    if(error) {
      return `${error}`; //Display errors on page for now
    }
  
    const selectedNote = data && data.note;
    if (!selectedNote) return null;

    const handleOnSave = (newNoteText) => {
      newNoteText = newNoteText.trim();
      if(newNoteText === ""){
        deleteNote({
          variables: {
            id: id
          }
        });
      }
      else{
        updateNote({
          variables: {
            id: id,
            note: {
              text: newNoteText,
            }
          }
        });
      }
      };

      const handleOnDelete = () => {
        deleteNote({
          variables: {
            id: id
          }
        });
    };

    const handleOnArchive = () => {
      updateNote({
        variables: {
          id: id,
          note: {
            isArchived: true
          }
        }
      });
    };

        return (
          <NoteEditPage 
          onSave={handleOnSave} 
          onDelete={handleOnDelete} 
          onArchive={handleOnArchive}
          text={selectedNote.text}
          />
        );

}