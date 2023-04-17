// import React, { useEffect, useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { TextField, TextareaAutosize } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CloseIcon from "@mui/icons-material/Close";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
// import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

// const ToDoCard = () => {
//   const [todo, setTodo] = useState("");
//   const [id, setId] = useState(1);
//   const [updateData, setUpdateData] = useState("");
//   const [todos, setTodos] = useState([
//     {
//       text: "some thing todo",
//       completed: false,
//       id: 0,
//     },
//   ]);
//   const [inputActive, setInputActive] = useState(false);
//   const [errorMessagae, setErrrorMessage] = useState(false);

//   function handleClick() {
//     setId(id + 1);
//     if (todo.length > 0) {
//       setErrrorMessage(false);
//       setTodos([...todos, { text: todo, completed: false, id: id }]);
//       setTodo("");
//     } else {
//       setErrrorMessage(true);
//     }
//   }

//   function deleteTask(id) {
//     const task = todos.filter((td) => td.id !== id);
//     setTodos(task);
//   }

//   function markDone(id) {
//     let newTask = todos.map((item) => {
//       if (item.id === id) {
//         return { ...item, completed: !item.completed };
//       }
//       return item;
//     });
//     setTodos(newTask);
//   }

//   // Close also when inputing new todo
//   function handleClose() {
//     setErrrorMessage(false);
//   }

//   // function editNote(id) {
//   //   const newList = [...todos].filter(todo => todo.id !== id)
//   //   setEditValue(newList)
//   //   setInputActive(true)
//   // }

//   ///////////////////////////
//   const changeNote = (e) => {
//     let newEntry = {
//       text: e.target.value,
//       completed: updateData.status ? true : false,
//       id: updateData.id,
//     };
//     setUpdateData(newEntry);
//   };

//   // Update task
//   ///////////////////////////
//   const updateNote = () => {
//     let filterRecords = [...todos].filter((task) => task.id !== updateData.id);
//     let updatedObject = [...filterRecords, updateData];
//     setTodos(updatedObject);
//     setUpdateData("");
//   };

//   return (
//     <div className="flex-col">

//       {!updateData && updateData ? (
//       <div className="flex justify-center mt-10">
//         <TextField
//           fullWidth
//           label="New todo..."
//           id="fullWidth"
//           className="max-w-md"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//         />
//         <button onClick={handleClick}>
//           <AddIcon fontSize="large" />
//         </button>
//       </div>
//         ) : (
//       <div className="w-500" key={item.id}>
//                     <TextField
//                       multiline
//                       label={"Task №" + (item.id + 1)}
//                       id=""
//                       variant="standard"
//                       className=""
//                       value={updateData && updateData.text}
//                       onChange={(e) => changeNote(e)}
//                     />

//                     <div className="flex">
//                       <span title="Save">
//                         <AddIcon
//                           className="cursor-pointer"
//                           fontSize="large"
//                           onClick={updateNote}
//                         />
//                       </span>
//                     </div>
//                   </div>
//         )}
//       {errorMessagae && (
//         <div className="flex justify-start mt-1 mx-3 bg-white-200 text-red-500">
//           You can't add empty string
//           <CloseIcon className="cursor-pointer" onClick={handleClose} />
//         </div>
//       )}
//       {todos && (
//         <>
//           <div
//             className={
//               todos.length > 1
//                 ? "mx-14 mt-8 p-2 grid grid-cols-2 col-start-2 gap-4 lg:gap-2 gap-y-8 content-start"
//                 : "mx-28 mt-8"
//             }
//           >
//             {todos.length > 0 ? (
//               todos.map((item) =>
//                   <div
//                     className={
//                       item.completed
//                         ? "line-through my-1 py-14 text-opacity-10 bg-orange-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 text-xl"
//                         : "my-1 py-14 bg-orange-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 text-xl"
//                     }
//                     key={item.id}
//                   >
//                     {item.text}
//                     <div className="flex justify-end">
//                       <span className="" title="Delete">
//                         <DeleteIcon
//                           color="action"
//                           sx={{ fontSize: 30 }}
//                           className="cursor-pointer"
//                           onClick={() => deleteTask(item.id)}
//                         />
//                       </span>
//                       {!item.completed &&
//                       <span title="Edit">
//                         <ModeEditOutlineIcon
//                           color="action"
//                           sx={{ fontSize: 30 }}
//                           className="mx-2 cursor-pointer"
//                           onClick={() =>
//                             setUpdateData({
//                               id: item.id,
//                               title: item.title,
//                               completed: item.completed ? true : false,
//                             })
//                           }
//                         />
//                       </span>
//                       }
//                       <span className="" title="Completed / Not completed">
//                         <CheckIcon
//                           color="success"
//                           sx={{ fontSize: 30 }}
//                           className="cursor-pointer mr-2"
//                           onClick={() => markDone(item.id)}
//                         />
//                       </span>
//                       {/* {completed && 
//               <div className='bg-black-500'>
//                 Good job! Done!</div>} */}
//                     </div>
//                   </div>
//               )
//             ) : (
//               <div className="grid place-items-center m-8 py-8 bg-orange-100">
//                 <h3>No task for doing</h3>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ToDoCard;







// More code

//  <div className={item.completed ? 'line-through text-opacity-3 mx-20 my-2 py-4 bg-green-600 text-green-50 text-xl' : 'mx-20 p-6 bg-green-700 text-green-50 text-xl'} key={item.id}>
//               {item.text}
//                 <div className='flex justify-end'>
//                 <span className='cursor-pointer' title='Delete'>
//               <DeleteIcon className='-mt-5 cursor-pointer' onClick={() => deleteTask(item.id)} />
//               </span>
//                   <span className='mx-10 cursor-pointer' title='Completed / Not completed'>
//               <CheckIcon className='-mt-5 cursor-pointer' onClick={() => markDone(item.id)} />
//               </span>
//               {/* {completed &&
//               <div className='bg-black-500'>
//                 Good job! Done!</div>} */}
//               </div>
//               </div>

{
  /* <div className={item.completed ? 'line-through text-xl' : 'text-xl h'} key={item.id}>
              <TextField label={'Task №' + (item.id + 1)} id="" variant="standard" className='' value={item.text} onChange={e => setEdit(e.target.value)} onClick={jjF} />
              
              <div className='flex justify-end'>
              <span className='cursor-pointer' title='Delete'>
            <DeleteIcon className='-mt-16 cursor-pointer text-red-700' onClick={() => deleteTask(item.id)} />
            </span>
                <span className='mx-1 cursor-pointer text-green-500' title='Completed / Not completed'>
            <CheckIcon className='-mt-16 cursor-pointer' onClick={() => markDone(item.id)} />
            </span>
            </div>
            </div> */
}
