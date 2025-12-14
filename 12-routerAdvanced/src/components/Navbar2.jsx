import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='flex dlex-row w-full p-5 bg-cyan-900'>
        <button onClick={() => 
          navigate('/')
        } className='bg-red-500 text-4xl rounded p-5 m-5 cursor-pointer'>Return to HomePage</button>

        <button onClick={() => 
          navigate(-1)
        } className='bg-red-500 text-4xl rounded p-5 m-5 cursor-pointer'>Previous Page</button>

        <button onClick={() => 
          navigate(+1)
        } className='bg-red-500 text-4xl rounded p-5 m-5 cursor-pointer'>Next Page</button>
      </div>
    </>
  )
}

export default Navbar2