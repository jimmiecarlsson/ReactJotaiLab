import React, { useState } from 'react'
import './App.css'
import CounterJotai from './components/CounterJotai'
import DisplayJotai from './components/DisplayJotai'
import Counter from './components/Counter'
import Display from './components/Display'


function App() {

  const [count, setCount] = useState(0)



  return (
      <>  
          <section style={{ marginBottom: '2rem' }}>
              <h2>useState-variant</h2>
              <Counter count={count} setCount={setCount} />
              <Display count={count} />
          </section>
          <section style={{ marginBottom: '2rem' }}>
              <h2>Jotai variant</h2>
              <CounterJotai />
              <DisplayJotai />
          </section>
          
    </>
  )
}

export default App
