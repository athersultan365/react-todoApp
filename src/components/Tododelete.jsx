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
    default:
      return state;
  }
};

export default function Tododelete() {
  const [datashow, setDataShow] = useState({ title: "" });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setDataShow({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: datashow });
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_Title", payload: index });
  };

  return (
    <div className="w-[400px] h-[150px] m-auto bg-green-300 text-center  ">
      <h1 className=" tex-center"> Delete Todo </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-gray-200 rounded mt-2 pl-1"
          name="title"
          type="text"
          value={datashow.title}
          onChange={handleInput}
        />
        <button
          // onClick={handleSubmit}
          className=" px-1 bg-cyan-200 mt-5 ml-0.5 rounded-r-2xl outline-none hover:bg-cyan-300 hover:text-amber-400"
        >
          Submit
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
            </li>
          ))
        ) : (
          <li>No show TODO </li>
        )}
      </ul>
    </div>
  );
}
