import React from 'react'

type Props = {
    img: string,
    desc: string,
    alt: string,
    to: string,
}
const ClientComponent = ({img, desc, alt, to}:Props) => {
  return (
    <div className='w-[450px] space-y-6'>
        <img src={img} alt="" className='h-[55px]'/>
        <p className='h-[177px]'>{desc}</p>
        <button>
            <a href={to} target='__blank' className='bg-00 text-ff rounded-3xl p-2 px-5 text-sm'>{alt}</a>
        </button>
    </div>
  )
}

export default ClientComponent