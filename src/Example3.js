import React, { Component } from "react";
class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  addCount = ()=>{
      this.setState({
          count:this.state.count+1
      })
  }
  componentDidMount(){
      console.log(`你点击了${this.state.count}次`)
  }
  componentDidUpdate(){
    console.log(`第二个声明周期${this.state.count}次`)
  }
  render() {
    return (
      <div>
        <div>You Click {this.state.count} times</div>
        <button
          onClick={() => {
            this.addCount();
          }}
        >
          增加
        </button>
      </div>
    );
  }
}

export default Example3;
