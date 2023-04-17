import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ListCards from "./ListCards";
import EditCard from "./EditCard";
import AddTodo from "./AddTodo";

const MainComponent = () => {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(0);
  const [updateData, setUpdateData] = useState();
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrrorMessage] = useState(false);

  function handleClick() {
    setId(id + 1);
    if (todo.length > 0) {
      setErrrorMessage(false);
      setTodos([...todos, { text: todo, completed: false, id: id }]);
      setTodo("");
      localStorage.setItem(
        "localTasks",
        JSON.stringify([...todos, { text: todo, completed: false, id: id }])
      );
    } else {
      setErrrorMessage(true);
    }
  }

  function deleteTask(id) {
    const task = todos.filter((td) => td.id !== id);
    setTodos(task);
    localStorage.setItem("localTasks", JSON.stringify(task));
  }

  function markDone(id) {
    let newTask = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(newTask);
    localStorage.setItem("localTasks", JSON.stringify(newTask));
  }

  const changeHolder = (e) => {
    if (updateData) setUpdateData({ ...updateData, text: e.target.value });
  };

  const updateNote = () => {
    let removeOldOrder = [...todos].filter((task) => task.id !== updateData.id);
    setTodos([...removeOldOrder, updateData]);
    setUpdateData("");
  };

  const cancelEdit = () => {
    setUpdateData("");
    setErrrorMessage(false);
  };

  function handleClose() {
    setErrrorMessage(false);
  }

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTodos(storedList);
    }
  }, []);

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
        <AddTodo todo={todo} setTodo={setTodo} handleClick={handleClick} />
      )}
      {errorMessage && (
        <div className="flex justify-start mt-1 mx-3 bg-white-200 text-red-500">
          You can't add empty string
          <CloseIcon className="cursor-pointer" onClick={handleClose} />
        </div>
      )}
      {todos && (
        <ListCards
          todos={todos}
          deleteTask={deleteTask}
          setUpdateData={setUpdateData}
          markDone={markDone}
        />
      )}
    </div>
  );
};

export default MainComponent;