import React from 'react'

const Navbar = (props) => {
  return (
    <>  
      <h3>Current theme is {props.theme}</h3>
      <button onClick={()=>{
        props.setTheme('Dark')
      }} >Change Theme</button>
    </>
  )
}

export default Navbar