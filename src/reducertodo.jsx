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
    default:
      return state;
  }
};

export default function Reducertodo() {

  const [textshow, setTextShow] = useState({ title: "" });

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTextShow({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: textshow });
  };

  

  return (
    <div className="w-[400px] h-[150px] bg-gray-400 m-auto mt-[10%] border text-center  ">
      <h1 className="w-max  rounded bg-blue-600 m-auto mt-1 "> ToDo </h1>
      <form onSubmit={handleSubmit}>
        <input
            className="bg-gray-200 rounded mt-2 pl-1"
            name="title"
            type="text"
            value={textshow.title}
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
          state.todo.map((ele, idx) => <li key={idx}> {ele.title} </li>)
        ) : (
          <li>No show TODO </li>
        )}
      </ul>
    </div>
  );
}
