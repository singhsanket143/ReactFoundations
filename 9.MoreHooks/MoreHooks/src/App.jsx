import { useState } from 'react';
import './App.css'

function App() {
  console.log("re-rendered")
  const [count, setCount] = useState(0);
  const [y, setY]= useState(0);
  return (
    <>
      Count is: {count} {y}

      <button onClick={() => {
        setCount(count+1);
        setY(y-1);
      }}>Click</button>
    </>
  )
}

export default App
