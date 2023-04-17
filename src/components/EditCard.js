import React from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';

const EditCard = ({ updateData, changeHolder, updateNote, cancelEdit }) => {

  function onKey(e) {
    if (e.key === "Enter") {
      updateNote()
    }
  }

  return (
    <div className="mt-4 text-2xl">
    <h2>Edit Form</h2>
    
    <div className="flex justify-center mt-10">
      
      <TextField
        fullWidth
        label="Edit..."
        id="fullWidth"
        className="max-w-md"
        value={updateData && updateData.text}
        onChange={(e) => changeHolder(e)}
        onKeyPress={onKey}
        defaultValue={updateData.text}
      />
      <button onClick={updateNote}>
        <AddIcon className="cursor-pointer" fontSize="large" />
      </button>
      <button onClick={cancelEdit}>
      <CloseIcon className="cursor-pointer ml-4" fontSize="large" color="error" />
      </button>
    </div>
    </div>
  );
};

export default EditCard;
