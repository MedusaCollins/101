import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center font-body w-full'>
        <h1 className='text-2a'>DesignMinds®</h1>
        <div className='space-x-4 flex justify-center items-center'>
            <button className='p-2'>CASE STUDIES</button>
            <button className='p-2'>WORK</button>
            <button className='p-2'>ABOUT</button>
            <button className='p-2'>CONTACT</button>
        </div>
    </div>
  )
}

export default Navbar