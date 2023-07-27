import React, {useState} from 'react'
function App() {
  const [star, setStar] = useState(5);
  function starPlus() {
    setStar(star + 1);
  }
  return (
    <div className="App">
    <h1>{star}</h1>
    <button onClick={starPlus}>Click</button>
    </div>
  );
}
export default App;
