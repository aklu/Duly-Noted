import React from "react";
import { action } from "@storybook/addon-actions";
import NoteEditPage from "./NoteEditPage";

export default {
    title: "NoteEditPage",
    component: NoteEditPage
  };

//click action for save
export const SaveAction = () => {
    return (
      <NoteEditPage
      id="1" 
      createdAt={new Date()} 
      onSave={action("text")}
      text="This is a save note"
      />
    );
  };



