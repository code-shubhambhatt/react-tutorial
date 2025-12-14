import React from 'react'
import { createContext } from 'react'
export const themeDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <div>
        <themeDataContext.Provider value = 'Shubham Bhatt'>
        {props.children}
        </themeDataContext.Provider>
        </div>
  )
}

export default ThemeContext