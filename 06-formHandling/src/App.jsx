import React, { useState } from 'react'
import './App.css'


const App = () => {
  const [title, setTitle] = useState('')
  const submitHandler =()=>{
    setTitle('')
    console.log("Form Submitted by ",title)
  }
  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      submitHandler()
    }} >
      <input type="text" placeholder='Enter your name...'
          value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
      />    
      <button>Submit</button>
    </form>
    </>
  )
}

export default App