// import React, { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   console.log(state, action); //  "INCREMENT"

//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT": 
//       return state - 1;
//     default:
//       return state; 
//   }
// };

// // useReducer(reducerfunction, initialState)

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state);

//   // initialState
//   // reducer function
//   // dispatch

//   // let [names] = ['Umair']
//   // console.log(names);

//   // [names] ['Umair']

//   // let [female, male] = ['Iqra', 'Suhail']    //
//   // console.log(female, male);

//   function increment() {
//     dispatch({ type: "INCREMENT" });
//   }

//   function decrement() {
//     dispatch({type: "DECREMENT"})
//   }

//   return (
//     <div>
//       <h1> Counter App: </h1>
//       <button
//         className="border rounded-3xl font-medium text-sm py-1 px-2"
//         onClick={increment}
//       >
//         Increment
//       </button>
//       <button onClick={decrement}> Decrement </button>
//     </div>
//   );
// }

// export default Counter;
