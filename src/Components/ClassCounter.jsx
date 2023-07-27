import React from 'react';

class ClassCounter extends react.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.countP.bind(this);
  }
  function countP() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return {
      <div>
      <h1>{this.count}</h1>
      <button onClick={countP}></button>
      </div>
    }
  }
}

export default ClassCounter;