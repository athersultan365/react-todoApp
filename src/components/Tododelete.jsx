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
        todo: state.todo.filter((_, idx) => idx !== action.payload),
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
    if (datashow.title.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: datashow });
    setDataShow({ title: "" });
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_Title", payload: index });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">
          📝 Delete Todo App
        </h1>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 mb-6"
        >
          <input
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            name="title"
            type="text"
            placeholder="Enter task..."
            value={datashow.title}
            onChange={handleInput}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <ul className="space-y-3">
          {state.todo.length > 0 ? (
            state.todo.map((ele, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="text-gray-800">{ele.title}</span>
                <button
                  onClick={() => handleDelete(idx)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">
              No tasks yet. Add one above!
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
