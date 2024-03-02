import React from 'react'

type Props = {
    img: string;
    date: string;
    title: string;
    desc: string;
}
const SmallNewsCard = ({img, date, title, desc}:Props) => {
  return (
    <div className='flex gap-7'>
        <img src={img} alt="Small new" className='w-72'/>
        <div className='flex flex-col gap-2'>
            <h3 className='text-light text-sm'>{date}</h3>
            <h1 className='text-3xl text-dark font-medium'>{title}</h1>
            <p className='mr-5 text-bodyText'>{desc}</p>
        </div>
    </div>
  )
}

export default SmallNewsCard