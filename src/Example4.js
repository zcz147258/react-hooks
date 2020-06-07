import React, { useState, createContext, useContext } from "react";
//创建一个共享的组件
const CountContext = createContext();
//父组件
function Example4() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>You Click {count} times</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        增加
      </button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  );
}
//字组件
function  Counter(){
    let count = useContext(CountContext)
    return(
        <h2>{count}</h2>
    )
}
export default Example4;
