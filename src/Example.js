import React, { useState,useEffect } from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
function Example() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log(`你点击了${count}次`)
    return ()=>{
      console.log('你走了Example')
    }
  },[count])
  return (
    <div>
      <div>You Click {count} times</div>
      <button onClick={()=>{setCount(count+1)}}>增加</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path='/' exact component={Index}/>
        <Route path='/list' exact component={List}/>
      </Router>
    </div>
  );
}
function Index(){
  useEffect(()=>{
    console.log('userEffect=>Index')
    return ()=>{
      console.log('你走了Index')
    }
  },[])
  return <h2>首页</h2>
}
function List(){
  useEffect(()=>{
    console.log('userEffect=>List')
    return ()=>{
      console.log('你走了List')
    }
  },[])
  return <h2>List page</h2>
}

export default Example;
