import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <Navbar theme={theme}>
        <h2>Nav1</h2>  
        <h2>Nav2</h2>  
      </Navbar>    
    </>
  )
}

export default App