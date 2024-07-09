import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from './AddNote'

function Notes() {
    const context = useContext(noteContext)
    const { notes, addNote, getNotes} = context;
    useEffect(()=>{
        getNotes()
    },[])
  return (
    <>
    <AddNote/>
    <div className="row my-2">
      <h2>your notes</h2>
      {notes.map((note) => {
          return <NoteItem key = {note._id} note = {note}/>
        })}
    </div>
        </>
  );
}

export default Notes;
