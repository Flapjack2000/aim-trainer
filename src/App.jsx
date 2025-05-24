import { useState } from 'react'
import './App.css'
import { Target } from './Target.jsx'

function App() {
  return (
    <>
      <div className="App">
        <h1>Target Practice</h1>
        <Target
          target={{ name: 'Circle', color: 'red', radius: 50, shape: 'circle' }}
          onClick={(target) => alert(`You clicked on ${target.name}`)}
        />
        <Target
          target={{ name: 'Square', color: 'blue', radius: 50, shape: 'square' }}
          onClick={(target) => alert(`You clicked on ${target.name}`)}
        />
      </div>
    </>
  )
}

export default App
