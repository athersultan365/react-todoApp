import React, { useReducer, useState } from "react";

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

function Countertodo() {
    const [task, setTask] = useState({title: ""})
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);

    const handleInput = (event)=> {
        const {name, value} = event.target
        setTask({[name]: value})
    }

    console.log(task);
    

    const handleSubmit = () => {
        dispatch({type: "ADD_TODO", payload: task})
    }

  return (
      <div className=" w-full h-[500px] bg-blue-300 border text-center">
      <h1>Todo with reducer</h1>

      <input className="border bg-amber-200 outline-none pl-1"
        type="text"
        placeholder="enter task title"
        name="title"
        value={task.title}
        onChange={handleInput}
      />
      <button onClick={handleSubmit} className="px-1 border bg-gray-300"> Submit Task </button>
    
    <ul>
        {
            state.todo.length > 0 ?
            state.todo.map( (ele, idx) => <li key={idx}> {ele.title} </li> )
            :
            <li>No Todo is available</li>
        }
    </ul>
    </div>
  );
}

export default Countertodo;
