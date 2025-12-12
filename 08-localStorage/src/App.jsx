import React from 'react'

const App = () => {
  // localStorage.setItem('namee','Shubham Bhatt')
  // localStorage.setItem('age','18')
  // const name =  localStorage.getItem('name')
  // const age =  localStorage.getItem('age')
  // localStorage.removeItem('name')

  // const user = [1,2,3,4,5]
  // localStorage.setItem('user',user)

  // const item = {
  //   username:'Shubham',
  //   age:'21',
  //   city:'haridwar'
  // }
  // localStorage.setItem('item',JSON.stringify(item))
  const variable = localStorage.getItem('item')
  console.log(JSON.parse(variable))

  return (
    <>
    {/* name :{name} */}
    
    age 
    </>
  )
}

export default App