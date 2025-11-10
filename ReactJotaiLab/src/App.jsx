import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Display from './components/Display'


function App() {

  const [count, setCount] = useState(0)



  return (
    <>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <h2>UseState Demo</h2>
              <Counter count={count} setCount={setCount} />
              <Display count={ count } />
          </div>
    </>
  )
}

export default App
