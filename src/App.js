import React from 'react';
import NoteEditPage from "./components/NoteEditPage.js";
import NoteListPage from "./components/NoteListPage.js";
import ReactMarkdown from "react-markdown";
import './App.css';


function App(props) { 
  return (
    <div className="App">
      <NoteListPage />
      {/* <NoteEditPage text="React _is_ **fun**!"/> */}
      </div>
  );
}

export default App;

