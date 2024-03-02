import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  img: string;
}
const ProjectCard = ({title, img}:Props) => {
  return (
    <Link to="/work" className='w-[450px] shadow-md rounded-md hover:scale-105 transition-all'>
        <img src={img} alt="" className='w-full rounded-md'/>
          <h1 className='text-3xl text-dark font-medium p-4'>{title}</h1>
    </Link>
  )
}

export default ProjectCard