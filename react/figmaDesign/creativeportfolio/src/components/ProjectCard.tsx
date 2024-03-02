import React from 'react'

type Props = {
  title: string;
  img: string;
}
const ProjectCard = ({title, img}:Props) => {
  return (
    <div className='w-[450px] shadow-md rounded-md'>
        <img src={img} alt="" className='w-full'/>
          <h1 className='text-3xl text-dark font-medium p-4'>{title}</h1>
    </div>
  )
}

export default ProjectCard