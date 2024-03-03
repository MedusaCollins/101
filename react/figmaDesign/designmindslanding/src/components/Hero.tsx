import React from 'react'
import ImageCard from './ImageCard'

// @ts-ignore
import image1 from '../assets/images/Image-3.png';
// @ts-ignore
import image2 from '../assets/images/Image-2.png';
// @ts-ignore
import image3 from '../assets/images/Image-1.png';
// @ts-ignore
import image4 from '../assets/images/Image-4.png';

const Hero = () => {
  return (
    <div className='space-y-24'>
        <div className='space-y-4'>
            <h1 className='uppercase text-8xl text-2a'>A Research AND Strategy<br/>Driven Digital Design<br/>Studio</h1>
            <p className='uppercase'>Crafted For Engagement<br/>Constructed for Connectivity</p>
        </div>

        <div className='flex gap-2'>
            <ImageCard img={image1} tags={["RESEARCH", "STRATEGY", "DESIGN", "DEVELOPMENT"]} title="DADEY" year={2021} productID={1}/> 
            <ImageCard img={image2} tags={["DESIGN", "DEVELOPMENT"]} title="ASANTE" year={2024} productID={2}/> 
            <ImageCard img={image3} tags={["RESEARCH", "STRATEGY", "DESIGN", "DEVELOPMENT"]} title="AMEKPOR" year={2023} productID={3}/> 
            <ImageCard img={image4} tags={["RESEARCH", "STRATEGY", "DESIGN", "DEVELOPMENT"]} title="KWABENA SPORTS" year={2021} productID={4}/> 
        </div>
    </div>
  )
}

export default Hero