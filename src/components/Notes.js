import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
    const context = useContext(noteContext)
    const { notes, setNotes} = context
  return (
    <div className="row my-2">
      <h2>your notes</h2>
      {notes.map((note) => {
        return <NoteItem note = {note}/>
      })}
    </div>
  );
}

export default Notes;
