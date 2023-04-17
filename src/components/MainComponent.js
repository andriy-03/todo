import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ListCards from "./ListCards";
import EditCard from "./EditCard";
import AddTodo from "./AddTodo";

const MainComponent = () => {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(1);
  const [updateData, setUpdateData] = useState();
  const [todos, setTodos] = useState([
    {
      text: "some thing todo",
      completed: false,
      id: id,
    },
  ]);
  const [errorMessage, setErrrorMessage] = useState(false);


  function handleClick() {
    setId(id + 1);
    if (todo.length > 0) {
      setErrrorMessage(false);
      setTodos([...todos, { text: todo, completed: false, id: id }]);
      setTodo("");
      localStorage.setItem("localTasks", JSON.stringify([...todos, { text: todo, completed: false, id: id }]))
    } else {
      setErrrorMessage(true);
    }
  }

  function deleteTask(id) {
    const task = todos.filter((td) => td.id !== id);
    setTodos(task);
    localStorage.setItem("localTasks", JSON.stringify(task))
  }

  function markDone(id) {
    let newTask = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(newTask);
    localStorage.setItem("localTasks", JSON.stringify(newTask))
  }

  // function editNote(id) {
  //   const newList = [...todos].filter(todo => todo.id !== id)
  //   setEditValue(newList)
  //   setInputActive(true)
  // }

  
  ///////////////////////////
  const changeHolder = (e) => {
    // let newEntry = {
    //   text: e.target.value,
    //   completed: updateData.status ? true : false,
    //   id: updateData.id,
    // };
    // setUpdateData(newEntry)

    //
    if (updateData)
    setUpdateData({ ...updateData, text: e.target.value });
  };

  // Update task
  const updateNote = () => {
    // let filterRecords = [...todos].filter((task) => task.id !== updateData.id);
    // let updatedObject = [...filterRecords, updateData];
    // setTodos(updatedObject);
    // setUpdateData("");

    //

    let removeOldOrder = [...todos].filter(task => task.id !== updateData.id)
    setTodos([...removeOldOrder, updateData])
    setUpdateData("")
  };

  const cancelEdit = () => {
    setUpdateData('')
    setErrrorMessage(false);
  }

  // Close also when inputing new todo
  function handleClose() {
    setErrrorMessage(false);
  }

  useEffect(() => {
    if(localStorage.getItem("localTasks")){
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTodos(storedList);
  }
  }, [])

  return (
    <div className="flex-col">
      
      {updateData && updateData ? (
      <EditCard
      updateData={updateData}
      changeHolder={changeHolder}
      updateNote={updateNote}
      cancelEdit={cancelEdit}
      errorMessage={errorMessage}
      />
        ) : (
      <AddTodo
      todo={todo}
      setTodo={setTodo}
      handleClick={handleClick}
      />
        )}
      {errorMessage && (
        <div className="flex justify-start mt-1 mx-3 bg-white-200 text-red-500">
          You can't add empty string
          <CloseIcon className="cursor-pointer" onClick={handleClose} />
        </div>
      )}
      {todos && (
        <ListCards todos={todos} deleteTask={deleteTask} setUpdateData={setUpdateData} markDone={markDone} />
      )}
    </div>
  );
};

export default MainComponent;