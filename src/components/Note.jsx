import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>

      <button
        className="delButton"
        onClick={() => {
          props.del(props.id);
        }}
      >
        -
      </button>
      <button
        className="editButton"
        onClick={() => {
          props.edit(props.id);
        }}
      >
        <span role="img" aria-label="x">
          ✏️
        </span>
      </button>
    </div>
  );
}

export default Note;
