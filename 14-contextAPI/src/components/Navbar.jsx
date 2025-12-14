import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
    // console.log(props.children)
    const contextData = useContext(themeDataContext)

  return (
    <>
        <div className="nav flex flex-row justify-between px-10 py-3 bg-gray-800 text-2xl">
            <div className=''>{contextData}</div>
            {props.children[0]}
            {props.children[1]}
            <Nav2 theme={props.theme} />
        </div>
    </>
  )
}

export default Navbar