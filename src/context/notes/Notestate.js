import react, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //add a note
  const addNote = async(title, description, tag) => {
     //api call
     const response = await fetch(`${host}/api/notes/addnote`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwOTg5M2M0NDI2MTk2OGVkODAzZWU0In0sImlhdCI6MTcxMTkwMjc4Mn0.t4RPmEUyzvi67Z_Uh3w56MO403pg82QAdOuOzOpWZE4"
        },
        body: JSON.stringify({title, description, tag}),
      });
    //   const json =  response.json()
    const note = {
      _id: Math.random() * 100,
      user: "6609893c44261968ed803ee4",
      title: title,
      description: description,
      tag: tag,
      date: Date.now,
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //geting notes
  const getNotes = async(title, description, tag) => {
     //api call
     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "get",
        headers: {
          "content-type": "application/json",
          "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwOTg5M2M0NDI2MTk2OGVkODAzZWU0In0sImlhdCI6MTcxMTkwMjc4Mn0.t4RPmEUyzvi67Z_Uh3w56MO403pg82QAdOuOzOpWZE4"
        }
      });
      const json =  await response.json()
      console.log(json)
      setNotes(json);
  };
  //delete a note
  const deleteNote = (id) => {
    console.log(`deletening the note with ${id}`);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //delete a note

  const updateNote = async (title, description, tag, _id) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/660cd6d7acefa146d5505972`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwOTg5M2M0NDI2MTk2OGVkODAzZWU0In0sImlhdCI6MTcxMTkwMjc4Mn0.t4RPmEUyzvi67Z_Uh3w56MO403pg82QAdOuOzOpWZE4"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json =  response.json()
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === _id) {
        element.title = title;
        element.tag = tag;
        element.description = description;
      }
    }
  };
  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, updateNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
