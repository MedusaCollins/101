import React from 'react'
// @ts-ignore
import ContactBg from '../assets/icons/ContactBg.svg'
// @ts-ignore
import Map from '../assets/icons/Map.svg'
// @ts-ignore
import Phone from '../assets/icons/Phone.svg'

const Contact = () => {
  return (
    <div>
      <div className='bg-cloud h-[200px] md:px-[300px] py-8 sm:px-2.5 space-y-3 flex flex-col justify-center'>
        <h3 className='text-dark'>HOME <span className='text-light'>/ CONTACT</span></h3>
        <h1 className='text-dark text-5xl font-semibold'>Reach out to me</h1>
      </div>
      
      <div className='flex py-8 md:px-[300px] sm:px-2.5 gap-5 h-[400px]'>
        <div className='flex flex-col relative justify-center items-center w-full text-white'>
          <img src={ContactBg} alt="" className='absolute -z-10 mt-2'/>
          <div className='bg-primary rounded-full p-4 mb-5'>
            <img src={Phone} alt=""/>
          </div>
          <h1 className='text-3xl font-medium'>Contact me at</h1>
          <h2>+8801725 228540</h2>
        </div>
        <div className='w-full space-y-5'>
          <input type="text" placeholder='Your Name' className='border border-light text-light rounded-md w-full p-3 outline-none'/>
          <input type="text" placeholder='userdomain@domain.com' className='border border-light text-light rounded-md w-full p-3 outline-none'/>
          <textarea placeholder='Your Name' rows={4} className='border border-light text-light rounded-md w-full p-3 outline-none resize-none'/>
          <button className='bg-primary text-white text-xl rounded-md p-3 w-40'>Let’s talk 👋</button>
        </div>
      </div>

      <div className='md:px-[300px] sm:px-2.5 space-y-3'>
        <h1 className='text-dark text-3xl font-semibold'>Locate me</h1>
        <img src={Map} alt="Map" className='rounded-md'/>
      </div>
    </div>
  )
}

export default Contact