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
    case "DELETE_Title": // ✅ fixed typo (was "DELETE _Title")
      return {
        ...state,
        todo: state.todo.filter((_, idx) => idx !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todo: state.todo.map((ele, idx) =>
          idx === action.payload.indx ? action.payload.edit : ele
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
    event.preventDefault();
    if (Done.title.trim() === "") return;

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

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setDone(state.todo[index]);
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_Title", payload: index });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">
          📝 Todo Manager
        </h1>

        {/* Input + Button */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 mb-6"
        >
          <input
            type="text"
            name="title"
            value={Done.title}
            onChange={handleInput}
            placeholder="Enter your task..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg text-white font-medium transition ${
              IsEditing
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {IsEditing ? "Update" : "Add"}
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
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="px-3 py-1 bg-yellow-400 text-white text-sm rounded-lg hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
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
