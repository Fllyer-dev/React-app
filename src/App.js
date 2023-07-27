import React, {useState} from 'react'
function App() {
  const [star, setStar] = useState(5);
  const [value, setValue] = useState('');
  
  function starPlus() {
    setStar(star + 1);
  }
  return (
    <div className="App">
    <h1>{value}</h1>
    <input 
    type='text'
    value={value}
    onChange={event => setValue(event.target.value)}
    />
    <h1>{star}</h1>
    <button onClick={starPlus}>Click</button>
    </div>
  );
}
export default App;
