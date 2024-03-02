import React from 'react'

type Props = {
    img: string;
    date: string;
    title: string;
    desc: string;
}
const BigNewsCard = ({img, date, title, desc}:Props) => {
  return (
    <div className='w-[500px] space-y-2'>
        <img src={img} alt="Big new" className='rounded-md w-full mb-6'/>
        <h3 className='text-light text-sm'>{date}</h3>
        <h1 className='text-3xl text-dark font-medium'>{title}</h1>
        <p className='mr-5 text-bodyText'>{desc}</p>
    </div>
  )
}

export default BigNewsCard