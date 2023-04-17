import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField'
import React from 'react'

const Input = ({ todo, setTodo, handleClick }) => {
  
  function onKey(e) {
    if (e.key === "Enter") {
      handleClick()
    }
  }
  return (
    <div className="mt-4 text-2xl">
      <h2>What are your plans?</h2>
    <div className="flex justify-center mt-10">
        <TextField
          fullWidth
          label="New todo..."
          id="fullWidth"
          className="max-w-md"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyPress={onKey}
        />
        <button onClick={handleClick}>
          <AddIcon fontSize="large" />
        </button>
      </div>
      </div>
  )
}

export default Input