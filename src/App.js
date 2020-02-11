import React from 'react';
import NoteListPage from "./components/NoteListPage.js";
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

