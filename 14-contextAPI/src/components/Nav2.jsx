import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Nav2 = (props) => {
    const data = useContext(themeDataContext) 
  return (
    <>
        <div className='flex flex-row gap-10 text-2xl'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>{data}</div>
            <div>{props.theme}</div>
        </div>
    </>
  )
}

export default Nav2