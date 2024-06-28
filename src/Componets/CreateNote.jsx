import React, { useState } from "react";
import { motion, DragControls } from "framer-motion";

const CreateNote = ({ saveHandler, setInputText, inputText }) => {
  let char = 100;
  let char_limit = char - inputText.length;

  return (
    <motion.div
      drag
      dragConstraints={{
        top: -10,
        right: 10,
        bottom: 10,
        left: -10,
      }}
      className="note"
    >
      <textarea
        cols={10}
        rows={8}
        placeholder="Type..."
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      ></textarea>
      <div className="note_footer">
        <span className="label"> Left{char_limit}</span>
        <button className="note_save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </motion.div>
  );
};
export default CreateNote;
