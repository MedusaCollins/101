import React from 'react'
import ProjectCard from './ProjectCard';
// @ts-ignore
import card1 from '../assets/icons/Card1.svg'
// @ts-ignore
import card2 from '../assets/icons/Card2.svg'
// @ts-ignore
import card3 from '../assets/icons/Card3.svg'
// @ts-ignore
import card4 from '../assets/icons/Card4.svg'
// @ts-ignore
import dribbbleColored from '../assets/icons/DribbbleColored.svg'

const RecentProject = () => {
  return (
    <div className='flex space-y-60'>
        <div className='flex justify-between absolute z-10 bg-cloud w-full h-[369px] md:px-[100px] py-8 sm:px-2.5'>
            <h1 className='text-dark text-5xl font-semibold'>Check out my<br/>Recent Projects 🎉</h1>
            <div className='flex h-14 space-x-5'>
                <button className='border-2 border-primary text-primary p-3 rounded-md'>More Works</button>
                <button className='border-2 border-white bg-white text-dark p-3 shadow-md rounded-md flex gap-2'>
                    <img src={dribbbleColored} alt="" className='w-6'/>View on Dribbble
                </button>
            </div>
        </div>
        <div className='z-30 grid grid-cols-2 gap-7 mx-auto'>
            <div className='mt-28 grid grid-cols-1 gap-7'>
                <ProjectCard title="Add a great project title of your choice" img={card1}/>
                <ProjectCard title="Add a great project title of your choice" img={card2}/>
            </div>
            <div className='mb-28 grid grid-cols-1 gap-7'>
                <ProjectCard title="Add a great project title of your choice" img={card3}/>
                <ProjectCard title="Add a great project title of your choice" img={card4}/>
            </div>
        </div>
    </div>

  )
}

export default RecentProject