import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function NoteItem(props) {
  const { title, user, _id, description, tag, date } = props.note;
  const context = useContext(noteContext)
  const {deleteNote} = context;
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h5 className="card-title">{title}</h5>
            <i className="fa-solid fa-trash-can mx-2" onClick={()=>{
                deleteNote(_id)
            }}></i>
            <i className="fa-regular fa-pen-to-square mx-2"></i>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
