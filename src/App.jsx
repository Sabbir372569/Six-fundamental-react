import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
 
  return (
    <>
      <h3>Six Core fundamental of React</h3>
        <ol>
          <li>Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>Event Handler</li>
          <li>State</li>
          <li>Load Data</li>
        </ol>
        <hr />
        <Posts></Posts>
    </>
  )
}

export default App
