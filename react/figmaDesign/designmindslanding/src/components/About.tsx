import React from 'react'
// @ts-ignore
import image from '../assets/images/image.png'
const About = () => {
  return (
    <div className='grid grid-cols-2 mt-24'>
        <h1 className='text-7xl col-span-2 mb-12 text-2a'>ABOUT</h1>
        <p className='text-xl uppercase'>A Global Digital Design Studio Transforming the<br/> Way People Engage with Brands.</p>
        <div className="space-y-12">
            <p>We are a close-knit group of inquisitive individuals who produce work that fills us with pride for clients and brands we deeply admire. Fostering collaboration as the cornerstone of our endeavors, we discern the essential skills needed for each project and assemble a remarkable team to craft something truly exceptional. By integrating strategy, branding, web design, and development, we construct digital encounters that revolutionize the manner in which individuals connect and engage with brands.</p>
            <button className='bg-00 text-ff text-sm p-2 px-5 rounded-3xl'>ABOUT US</button>
        </div>

        <img src={image} alt="office" className='col-span-2 w-full mt-24'/>
    </div>
  )
}

export default About