import { useTranslation } from "react-i18next";
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
import NoteListItem from "./NoteListItem";
import useNotes from "../hooks/useNotes";

export default function NoteListPage() {
  const { notes, createNote } = useNotes();
  const { t } = useTranslation();
  const history = useHistory();
  const [showArchive, setShowArchive] = useState(true);
  
  const handleListItemClick = (id) => {
    history.push(`/notes/edit/${id}`);
  };

  const handleNewNoteClick = () => {
    const { id } = createNote();
    history.push(`/notes/edit/${id}`);
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
                  createdAt={note.createdAt}
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

    // <IonButton color="secondary" onClick={() =>  {setShowArchive(false); handleArchiveState()} }>

