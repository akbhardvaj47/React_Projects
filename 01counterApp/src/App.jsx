import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h2>Welcome to My first App ({count})</h2>
      <button onClick={addValue}>Click Me! to Increase Value</button>
      <h3>This is counter ({count})</h3>
      <p>Updated Counter Value: {count}</p>
      <br />
      <button onClick={removeValue}>Click Me! to Decrease Value</button>
      <h3>Decreasing value by 1 ({count})</h3>
      <p>Updated Counter Value: {count}</p>
    </div>
  )
}

export default App
