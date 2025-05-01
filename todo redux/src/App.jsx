import React from 'react'
import './App.css'
import TodoForm from './comoponents/TodoForm'
import Todos from './comoponents/Todos'
const App = () => {
  return (
    <div>
      <h1>Learn redux toolkit</h1>
      <TodoForm/>
      <Todos/>
    </div>
  )
}

export default App
