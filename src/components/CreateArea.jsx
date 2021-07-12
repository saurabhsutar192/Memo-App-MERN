import React, { useRef, useEffect } from "react";

import { useForm } from "react-hook-form";

function CreateArea(prop) {
  let ipHead = useRef();
  const { register, handleSubmit } = useForm();

  const submitHandler = handleSubmit((data) => {
    if (!prop.note.some((arr) => arr.text === data.text)) {
      if (data.text) {
        prop.addItem(data, ipHead.current);
      } else {
        window.alert("Enter Text");
      }
    } else {
      window.alert("Duplicate Entries Found!");
    }
  });

  useEffect(() => {
    prop.getInput(ipHead.current);
  });

  return (
    <div>
      <form onSubmit={submitHandler} id="createArea">
        <input
          {...register("text")}
          ref={ipHead}
          className="ip"
          name="text"
          type="text"
          id="text"
          placeholder="add Memo"
          autoComplete="off"
        />

        <button className="addButton" type="submit">
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
