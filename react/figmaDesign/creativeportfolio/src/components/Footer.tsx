import React from 'react'
import LogoWithText from '../shared/LogoWithText'

// @ts-ignore
import dribbbleSolid from '../assets/icons/Dribbble.svg'
// @ts-ignore
import facebook from '../assets/icons/Facebook.svg'
// @ts-ignore
import behance from '../assets/icons/Behance.svg'

const Footer = () => {
  return (
    <div className='flex flex-col mt-12'>
        <div className='h-[180px]'>
            <div className='bg-primary mx-[100px] h-[85%] rounded-md flex justify-center items-center'>
                <div className='space-y-6 flex flex-col justify-center items-center'>
                    <h1 className='text-white text-3xl font-semibold'>Let's create something great together!</h1>
                    <div className='space-x-3'>
                        <input type="text" 
                        placeholder='Enter your email' 
                        className='text-white placeholder-white bg-transparent outline-none p-3.5 border rounded-md w-[300px]'/>
                        <button className='border-2 border-white rounded-md text-white font-semibold p-3'>Be my friend</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[150px] bg-dark flex flex-col gap-5 justify-center items-center md:px-[100px] py-8 sm:px-2.5'>
            <div className='flex justify-between items-center w-full'>
                <LogoWithText dark={true}/>
                <div className='text-white space-x-12'>
                    <button className='p-2'>Home</button>
                    <button className='p-2'>Works</button>
                    <button className='p-2'>Blog</button>
                    <button className='p-2'>Contact</button>
                </div>
                <div className='space-x-6'>
                    <button><img src={facebook} alt="" /></button>
                    <button><img src={behance} alt="" /></button>
                    <button><img src={dribbbleSolid} alt="" /></button>
                </div>
            </div>
            <p className='text-light'>Copyright ©2022. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer