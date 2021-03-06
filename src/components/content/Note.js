import React from "react";
import moment from "moment";
import "./notes.css";

const Note = ({ note, deleteNote, onEdit }) => {
  return (
    <div className="col s12 m6 note">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{note.title}</span>
          <p>{note.content}</p>
          <p>Created {moment(note.createdAt.toDate()).calendar()}</p>
          <p>by {note.authorFirstName}</p>
        </div>
        <div className="card-action space-right2">
          <button
            className="waves-effect waves-light orange btn"
            onClick={() => onEdit(note.id)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteNote(note.id)}
            className="waves-effect waves-light orange btn"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
