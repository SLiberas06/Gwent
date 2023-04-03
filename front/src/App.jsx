import { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>Gwent</h1>
     <Home/>
    </div>
  )
}

export default App
