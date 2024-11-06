import { useState } from 'react'
import FakeAPIApp from './components/FakeAPIApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FakeAPIApp />
    </div>
  );
}

export default App
