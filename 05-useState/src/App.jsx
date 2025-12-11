import React from 'react'
import { useState } from 'react'
import Counter from './Counter.jsx'
import Advanced from './Advanced.jsx'

const App = () => {
  // const [num, setNum] = useState(30)
  // function changeNum(){
  //   setNum (40)
  // }
  return (
    <>
    <Advanced/>
    {/* <Counter/> */}
    {/* <div>
      <h1 className='text-6xl font-bold uppercase'>Value of Num is : {num}</h1>
      <button className='bg-amber-300 p-2 cursor-pointer'onClick={changeNum}>Click Me</button>
    </div> */}
    
    </>
  )
}

export default App