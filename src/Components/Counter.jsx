import React, {useState} from 'react';

function Counter() {
  const[count, setCount] = useState(0);
  
  function countP() {
    setCount(count + 1);
  }
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={countP}>Клик</button>
    </div>
    );
}

export default Counter;