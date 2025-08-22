// import React, { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   console.log(state, action);

//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// function Counterone() {
//   //   const [state] = useReducer(reducer, initialState);
//   const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state);



//   function increment() {
//     dispatch({ type: "INCREMENT" });
//   }
//   function decrement() {
//     dispatch({ type: "DECREMENT" });
//   }

//   return (
//     <div>
//       <h3> My Counter App: </h3>
//       <button
//         className="bg-amber-300 rounded-3xl font-medium text-sm py-2 px-4 hover:bg-amber-500 cursor-pointer"
//         onClick={increment}
//       >
//         Incarement
//       </button>
//       <button
//         className="bg-amber-300 rounded-3xl font-medium text-sm py-2 px-4 hover:bg-blue-200 cursor-pointer"
//         onClick={decrement}
//       >
        
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default Counterone;
