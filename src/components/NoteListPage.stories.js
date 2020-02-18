import React from "react";
import { action } from "@storybook/addon-actions";
import NoteListPage from "./NoteListPage";
import NoteEditPage from "./NoteEditPage";

export default {
    title: "NoteListPage",
    component: NoteListPage
  };

//click action for cancel
export const CancelAction = () => {
  return (
    <NoteEditPage
    id="1" 
    setSelectedNoteId = "1"
    createdAt={new Date()} 
    onCancel={action("setSelectedNoteId")}
    text="This is a cancel note"
    />
  );
};





