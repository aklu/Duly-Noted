import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonFab,
  IonButtons,
  IonButton,
  IonFabButton,
  IonIcon
} from "@ionic/react";
import { add, funnel } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gql, useMutation, useQuery } from "@apollo/client";
import NoteListItem from "./NoteListItem";
// import useNotes from "../hooks/useNotes";

//all queries need gql
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

const CREATE_NOTE = gql`
  mutation createNote($note: CreateNoteInput!) {
    createNote(note: $note) {
      id
      createdAt
      isArchived
      text
    }
  }
`;

export default function NoteListPage() {
  const [createNote] = useMutation(CREATE_NOTE, {
    onCompleted(data) {
      if (data && data.createNote) {
        const id = data.createNote.id;
        history.push(`/notes/edit/${id}`);
      }
    },
    refetchQueries: [
      {
        query: GET_NOTES
      }
    ]
  });
  const { data, error, loading } = useQuery(GET_NOTES, {
    pollInterval: 5000
  });
  // const { createNote } = useNotes();
  const { t } = useTranslation();
  const history = useHistory();
  const [showArchive, setShowArchive] = useState(true);

  if (loading) {
    return "Loading..."; //TODO: eventually show a loading spinner
  }

  if(error) {
    return `${error}`; //Display errors on page for now
  }

  const notes = (data && data.notes) || [];
  
  const handleListItemClick = (id) => {
    history.push(`/notes/edit/${id}`);
  };

  const handleNewNoteClick = () => {
    createNote({
      variables: {
        note: {
          text: ""
        }
      }
    });
  };

  let newNotes;
  if (showArchive) {
    newNotes = notes;
  } else {
    newNotes = notes.filter((note) => note.isArchived !== true);
  }

const handleArchiveState = () => {
  setShowArchive(!showArchive);
};
    return(
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonTitle>{t("noteListPageTitle")}</IonTitle>           
           <IonButtons slot="primary">
              <IonButton color="secondary" onClick={() =>  handleArchiveState(showArchive) }>
                <IonIcon slot="icon-only" icon={funnel}/>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="full">
          {
            newNotes.map((note, index) => {
              return (
                <NoteListItem
                  createdAt={new Date(note.createdAt)}
                  id= {note.id}
                  key={note.id}
                  onClick={handleListItemClick} 
                  text= {note.text}
                  isArchived={note.isArchived}
                />
              );
            })
          }
          </IonList>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={handleNewNoteClick}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
    }