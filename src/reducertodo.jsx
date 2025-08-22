import React, { useState, useReducer } from "react";

// Initial state
const initialState = {
  todo: [],
};

// Reducer function
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

  // Handle input change
  const handleInput = (event) => {
    const { name, value } = event.target;
    setTextShow({ [name]: value });
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (textshow.title.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: textshow });
    setTextShow({ title: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          ✅ My Todo List
        </h1>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 mb-5"
        >
          <input
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="title"
            type="text"
            placeholder="Add new task..."
            value={textshow.title}
            onChange={handleInput}
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <ul className="space-y-2">
          {state.todo.length > 0 ? (
            state.todo.map((ele, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between bg-gray-100 p-2 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="text-gray-800">{ele.title}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center">
              No tasks yet. Add one above!
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
