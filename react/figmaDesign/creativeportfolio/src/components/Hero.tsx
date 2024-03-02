import React from 'react'
// @ts-ignore
import blur from '../assets/icons/Blur.svg'
// @ts-ignore
import headphoto from '../assets/icons/HeadPhoto.svg'
// @ts-ignore
import ovals from '../assets/icons/Ovals.svg'

const Hero = () => {
  return (
    <div className='flex justify-between relative md:px-[100px] sm:px-2.5 h-[500px]'>
        <div className='flex flex-col h-full justify-center'>
            <h1 className='text-dark text-5xl font-semibold'>Building digital<br/><span className='text-primary'>products & brands</span></h1>
            <p className='text-dark my-3'>I am a Digital Product Designer and Creative Designer in Dhaka.<br/>
                I specialize in UX/UI Design, Responsive Web & Mobile Design,<br/>
                Front-end Development, and more
            </p>
            <button className='bg-primary text-white text-xl rounded-md p-3 w-40'>Let’s talk 👋</button>
        </div>
        <div className='absolute right-5 md:block hidden'>
            <img src={blur} alt="blur" className='h-[450px]'/>
            <img src={ovals} alt="ovals" className='absolute top-24 right-20 w-[400px]'/>
            <img src={headphoto} alt="headPhoto" className='absolute top-20 right-20 w-[400px]'/>
        </div>
    </div>
  )
}

export default Hero