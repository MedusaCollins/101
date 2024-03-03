import React from 'react'

// @ts-ignore
import image1 from '../assets/images/Image_1.png'
// @ts-ignore
import image2 from '../assets/images/Image_2.png'
// @ts-ignore
import image3 from '../assets/images/Image_3.png'
// @ts-ignore
import image4 from '../assets/images/Image_4.png'

const WorkedWith = () => {

        const workedWith = [

    {
        title: "LVMH",
        desc: "Research - Strategy - Design - Development",
        more: "More +"
    },
    {
        title: "VividScape flow",
        desc: "Design",
        more: "More +"
    },
    {
        title: "Elevate Design",
        desc: "Research - Strategy - Design - Development",
        more: "MORE +"
    },
    {
        title: "Bendphil",
        desc: "Strategy - Design - Development",
        more: "More +"
    },
    {
        title: "Vania",
        desc: "Research - Strategy - Design - Development",
        more: "More +"
    },
    {
        title: "kenya airways",
        desc: "Design - Development",
        more: "More +"
    },
    {
        title: "fendy",
        desc: "Research - Strategy - Design - Development",
        more: "More +"
    },
    {
        title: "lema  Print",
        desc: "Research - Design",
        more: "More +"
    },
    {
        title: "julia  Dallamore",
        desc: "Design - Development",
        more: "More +"
    }
    ]
  return (
    <div>
        <h1 className='text-5xl uppercase'>Brands We've Worked With</h1>
        <div className='my-36'>
            {workedWith.map((client, index) => (
                <div key={index} className={`grid grid-cols-4 py-5 border-d6 ${index === 0 ? 'border-y' : 'border-b'}`}>
                    <h1 className='col-span-2'>{client.title}</h1>
                    <p className='uppercase'>{client.desc}</p>
                    <p className='text-end'>{client.more}</p>
                </div>
            ))}
        </div>
        <div className='flex overflow-auto gap-10'>
            <img src={image1} alt="bycycle" />
            <img src={image2} alt="Looking Paper" />
            <img src={image3} alt="Plant" />
            <img src={image4} alt="Looking Board" />
        </div>
    </div>
  )
}

export default WorkedWith