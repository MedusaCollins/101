import React from 'react'
import ProjectCard from '../components/ProjectCard'

// @ts-ignore
import card1 from '../assets/icons/Card1.svg'
// @ts-ignore
import card2 from '../assets/icons/Card2.svg'
// @ts-ignore
import card3 from '../assets/icons/Card3.svg'
// @ts-ignore
import card4 from '../assets/icons/Card4.svg'
// @ts-ignore
import card5 from '../assets/icons/Card5.svg'
// @ts-ignore
import card6 from '../assets/icons/Card6.svg'
// @ts-ignore
import card7 from '../assets/icons/Card7.svg'
// @ts-ignore
import card8 from '../assets/icons/Card8.svg'
const Works = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='bg-cloud h-[200px] md:px-[200px] py-8 sm:px-2.5 space-y-3'>
        <h3 className='text-dark'>HOME <span className='text-light'>/ WORKS</span></h3>
        <h1 className='text-dark text-5xl font-semibold'>My Awesome Projects</h1>
      </div>
      <div className='grid grid-cols-2 w-fit gap-5 mx-auto mt-12'>
        <ProjectCard title="Add a great project title of your choice" img={card1}/>
        <ProjectCard title="Add a great project title of your choice" img={card3}/>
        <ProjectCard title="Add a great project title of your choice" img={card2}/>
        <ProjectCard title="Add a great project title of your choice" img={card4}/>
        <ProjectCard title="Add a great project title of your choice" img={card6}/>
        <ProjectCard title="Add a great project title of your choice" img={card7}/>
        <ProjectCard title="Add a great project title of your choice" img={card5}/>
        <ProjectCard title="Add a great project title of your choice" img={card8}/>
      </div>
    </div>
  )
}

export default Works