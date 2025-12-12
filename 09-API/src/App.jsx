import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [data, setData] = useState([])

  // using async await
  // const getData = async() => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const data = await response.json()  
  //   console.log(data)
  // }
  
  // using axios
  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    // console.log(response.data)
    setData(response.data)
  }
  return (
    <>
      <button onClick={getData}>Fetch API</button>
      <div>
        {data.map((elem,idx)=><h3 key={elem.id}>Hello {elem.author}</h3>)}
      </div>
    </>
  )
}

export default App