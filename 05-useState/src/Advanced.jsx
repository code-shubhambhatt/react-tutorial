import React from 'react'
import { useState } from 'react'

const Advanced = () => {
    const [user, setUser] = useState({name:'Shubham', age:'23'})
    const btnClicked=()=>{
        // const newUser = {...user}
        // newUser.name='Diwakar'
        // newUser.age='22'
        // setUser(newUser)

        setUser(prev=>({...prev,name:'Rajan', age:'30'}))
        

    }
  return (
    <>
        <h1> {user.name} , {user.age} </h1>
        <button onClick={btnClicked} >Click</button>
    </>
    )
}

export default Advanced