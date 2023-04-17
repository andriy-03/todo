import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

const ListCards = ({ todos, deleteTask, setUpdateData, markDone }) => {
  return (
    <div
      className={
        todos.length > 1
          ? "mx-14 mt-8 p-2 grid grid-cols-2 col-start-2 gap-4 lg:gap-2 gap-y-8 content-start"
          : "mx-28 mt-8"
      }
    >
      {todos.length > 0 ? (
        todos.map((item) => (
          <div
            className={
              item.completed
                ? "line-through my-1 py-14 text-opacity-10 bg-orange-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 text-xl"
                : "my-1 py-14 bg-orange-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 text-xl"
            }
            key={item.id}
          >
            {item.text}
            <div className="flex justify-end">
              <span className="" title="Delete">
                <DeleteIcon
                  color="action"
                  sx={{ fontSize: 30 }}
                  className="cursor-pointer"
                  onClick={() => deleteTask(item.id)}
                />
              </span>
              {!item.completed && (
                <span title="Edit">
                  <ModeEditOutlineIcon
                    color="action"
                    sx={{ fontSize: 30 }}
                    className="mx-2 cursor-pointer"
                    onClick={() =>
                      setUpdateData({
                        text: item.text,
                        completed: item.completed ? true : false,
                        id: item.id,
                      })
                    }
                  />
                </span>
              )}
              <span className="" title="Completed / Not completed">
                <CheckIcon
                  color="success"
                  sx={{ fontSize: 30 }}
                  className="cursor-pointer mr-2"
                  onClick={() => markDone(item.id)}
                />
              </span>
              {/* {completed && 
              <div className='bg-black-500'>
                Good job! Done!</div>} */}
            </div>
          </div>
        ))
      ) : (
        <div className="grid place-items-center m-8 py-8 bg-orange-100">
          <h3>No task for doing</h3>
        </div>
      )}
    </div>
  );
};

export default ListCards;
