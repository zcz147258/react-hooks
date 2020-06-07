import React, { useReducer } from "react";
function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      <div>You Click {count} times</div>
      <button onClick={()=>{dispatch('add')}}>增加</button>
      <button onClick={()=>{dispatch('sub')}}>减少</button>
    </div>
  );
}
export default ReducerDemo

//原生reducer
// function countReducer(state,action){
//     switch(action.type){
//         case 'add':
//             return state + 1
//         case 'sub':
//             return state - 1
//         default:
//             return state
//     }
// }
