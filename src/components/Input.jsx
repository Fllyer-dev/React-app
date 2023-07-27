import React, {useState} from 'react';

function Input() {
  const[value, setValue] = useState('Enter');
  return (
    <div>
    <h1>{value}</h1>
    <input
     type='text'
     value={value}
     onChange={event => setValue(event.target.value)}
     />
    </div>
    );
}

export default Input;