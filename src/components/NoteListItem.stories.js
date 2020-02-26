import React from "react";
import { action } from "@storybook/addon-actions";
import NoteListItem from "./NoteListItem";

export default {
  title: "NoteListItem",
  component: NoteListItem
};

//short text needs to return jsx within component that would simulate the story that we are telling
export const ShortText = () => {
  return (
    <NoteListItem id="1" createdAt={new Date()} text = "This is a short note" />
  );
};

//long text
export const LongText = () => {
  return (
    //I was getting an error that the lorem ipsum text was spelled incorrectly so I found different words 
    <NoteListItem id="1" createdAt={new Date()} text = "Lorem ipsum dolor sit some there more test flowers pillows coffee vitamin dog picture sign taxi person briefcase walk post light bar store boston alternative made cage city cream madison breathe yoga car bus umbrella pizza cup candle pill metal chair rug participate adjective forever fierce running water watt plant bowl sugar bench swivel roses caffeine creamer." />
  );
};

//markdown
export const MarkdownText = () => {
  return (
    <NoteListItem id="1" createdAt={new Date()} text = "This _is_ some **markdown** text" />
  );
};

//created less than 1 week ago
const sixDaysAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);
export const LessThanOneWeek = () => {
  const createdAt = new Date(sixDaysAgo);
  return (
    <NoteListItem id="1" createdAt={createdAt} text = "This is a note from this week" />
  );
};

//created more than a week ago
const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);
export const MoreThanOneWeek = () => {
  const createdAt = new Date(twoWeeksAgo);
  return (
    <NoteListItem id="1" createdAt={createdAt} text = "This is an older note" />
  );
};
//click action
export const ClickAction = () => {
  return (
    <NoteListItem 
    id="1" 
    createdAt={new Date()} 
    onClick={action("onClick")}
    text = "This is a clickable note" 
    />
  );
};

//empty state
export const EmptyText = () => {
  return (
    <NoteListItem id="1" createdAt={new Date()} text = "" />
  );
};

//empty state
export const SpacesOnly = () => {
  return (
    <NoteListItem id="1" createdAt={new Date()} text = " " />
  );
};

//error
export const ErrorInOnClick = () => {
  const onClick = () => {
    throw new Error("simulated error");
  }
  return (
    <NoteListItem 
    id="1" 
    createdAt={new Date()} 
    onClick={onClick}
    text = "This is a clickable note" 
    />
  );
};