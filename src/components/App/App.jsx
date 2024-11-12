import { useState } from 'react'
import './App.css'
import EntryForm from '../EntryForm/EntryForm'
import CompletedToggle from '../CompletedToggle/CompletedToggle'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='Steven_Title'>Steven Karl's</h1>
      <h2 className='To_Do_Title'>To-Do List</h2>
      <EntryForm />
      <CompletedToggle />
    </div>
  )
}

export default App
