import React, { useReducer, useState } from "react";

const initialState = {
  todo: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
                // spread

        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
};

function Todo() {
 
  const [work, setWork] = useState({ title: "" });   // object

//   destructured arry 

  const [state, dispatch] = useReducer(reducer, initialState);

// initialState and action     



  const handleInput = (event) => {
    const {name, value} = event.target
    setWork({[name]: value})
  }

  const handleSubmit = () => {
    dispatch({type: "ADD_TODO", payload: work });
  }

  return (
    <div className="w-full h-[300px] bg-blue-300  border text-center">
      <h1 className=" w-[60%] bg-blue-400 m-auto border-0 rounded-b-full"> TODO </h1>
      <input
        className=" bg-gray-500 border  pl-2 rounded-l-2xl outline-none text-white "
        type="text"
        name="title"
        value={work.title}
        onChange={handleInput}
      />
      <button onClick={handleSubmit} className=" px-1 bg-cyan-200 mt-5 ml-0.5 rounded-r-2xl outline-none hover:bg-cyan-300 hover:text-amber-400" >
        Submit On Click
      </button>
      <ul>
        {state.todo.length > 0 ? (
          state.todo.map((ele, idx) => <li key={idx}>{ele.title}</li>)
        ) : (
          <li> TODO not Available</li>
        )}
      </ul>
    </div>
  );
}

export default Todo;
