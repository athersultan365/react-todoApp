import React, { useState, useReducer } from "react";
const initialState = {
  todo: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case "DELETE _Title":
      return {
        ...state,
        todo: state.todo.filter((ele, idx) => {
          return idx !== action.payload;
        }),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todo: state.todo.map((ele, idx) =>
          idx == action.payload.indx ? action.payload.edit : ele
        ),
      };
    default:
      return state;
  }
};

export default function TestEditTodo() {
  const [Done, setDone] = useState({ title: "" });
  const [state, dispatch] = useReducer(reducer, initialState);
  const [IsEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setDone({ [name]: value });
  };
  const handleSubmit = (event) => {
    // event.prevenDefault();

    // dispatch({ type: "ADD_TODO", payload: Done });
    if (IsEditing) {
      dispatch({
        type: "EDIT_TODO",
        payload: { indx: currentIndex, edit: Done },
      });
      setIsEditing(false);
      setDone({ title: "" });
    } else {
      dispatch({ type: "ADD_TODO", payload: Done });
      setDone({ title: "" });
    }
  };
  const handleEdit = (Index) => {
    setIsEditing(true);
    setCurrentIndex(Index);
    let update = state.todo[Index];
    setDone(update);
  };
  const handledelete = (Index) => {
    dispatch({ type: "DELETE _Title", payload: Index });
  };

  return (
    <div className="w-full h-[150px] bg-green-300 ">
      <h1 className="font-bold text-center w-max bg-amber-300 m-auto rounded-4xl pl-2 pr-2">
        Test Area Todo Edit
      </h1>
      <input
        type="text"
        name="title"
        value={Done.title}
        onChange={handleInput}
        className="w-[200px] bg-blue-300 rounded-l mt-3 m-auto ml-[20%] outline-none px-1 "
      />
      <button
        onClick={handleSubmit}
        className="px-1 ml-2  bg-red-300 rounded-r"
      >
        {IsEditing ? "update " : "Submit"}
      </button>
      <ul>
        {state.todo.length > 0 ? (
          state.todo.map((ele, idx) => (
            <li key={idx}>
              {ele.title}
              <button
                onClick={() => handledelete(idx)}
                className=" px-1 bg-cyan-200 mt-5 ml-0.5 rounded-r-2xl outline-none hover:bg-cyan-300 hover:text-red-400"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(idx)}
                className=" px-1 bg-cyan-200 mt-5 ml-0.5 rounded-r-2xl outline-none hover:bg-cyan-300 hover:text-red-400"
              >
                Edit
              </button>
            </li>
          ))
        ) : (
          <li className="text-center">No show TODO </li>
        )}
      </ul>
    </div>
  );
}
