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
    case "DELETE_Title":
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

export default function Editupdatetodo() {
  const [Dataupdate, setDataUpdate] = useState({ title: "" });
  // const states = useState('initialState')   // [initialState, function]

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setDataUpdate({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      dispatch({
        type: "EDIT_TODO",
        payload: { indx: currentIndex, edit: Dataupdate },
      });
      setIsEditing(false);
      setDataUpdate({ title: "" });
    } else {
      dispatch({ type: "ADD_TODO", payload: Dataupdate });
      setDataUpdate({ title: "" });
    }
  };
  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    let update = state.todo[index];
    setDataUpdate(update);
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_Title", payload: index });
  };

  return (
    <div className="w-[400px] h-[150px] m-auto bg-green-300 text-center  ">
      <h1 className=" tex-center font-bold "> Update&Edite Todo </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-gray-200 rounded mt-2 pl-1"
          name="title"
          type="text"
          value={Dataupdate.title}
          onChange={handleInput}
        />
        <button
                 
          className=" px-1 bg-cyan-200 mt-5 ml-0.5 rounded-r-2xl outline-none hover:bg-cyan-300 hover:text-amber-400"
        >
          {isEditing ? " Update " : " Submit"}
        </button>
      </form>
      <ul>
        {state.todo.length > 0 ? (
          state.todo.map((ele, idx) => (
            <li key={idx}>
              {ele.title}
              <button
                onClick={() => handleDelete(idx)}
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
          <li>No show TODO </li>
        )}
      </ul>
    </div>
  );
}
