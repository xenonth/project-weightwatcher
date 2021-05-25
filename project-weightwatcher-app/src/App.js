import logo from './logo.svg';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    
    <button onClick={() => setCount(1)}>
      Click me!
      {console.log(count)}
    </button>
  );
  
}

export default App;
