import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const LayOut = () => {
  return (
    <div className='bg-gray-950 text-white min-h-screen'>
      <div className='container px-6 py-4 mx-auto'>
        <Navbar/>
      <main>

        <Outlet/>
      </main>
      </div>
    </div>
  )
}

export default LayOut