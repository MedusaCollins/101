import React from 'react'

const Footer = () => {
    const info = [
        {
            title: "Business inquiries",
            desc: ["hello@DesignMindsAgency.com", "+322 XX XXX XXXX"]
        },
        {
            title: "Open Positions",
            desc: ["Junior-Mid Digital Designer", "JUNIOR WEB Designer", "backend Developer"]
        },
        {
            title: "slovenia",
            desc: ["133a Rye Lane", "KRICKIZSKA MP19 47BQ", "SLOVENIA"]
        },
        {
            title: "Kenya",
            desc: ["14 kenyatta Street", "CBD00, 19801", "nairobi"]
        }
    ]
  return (
    <div className='w-full px-8 space-y-40'>
        <div className="grid grid-cols-2 uppercase">
            <div className='space-y-8'>
                <h1 className='text-2xl '>We would love to hear from <br/>you. LET’S WORK — TOGETHER</h1>
                <button className='bg-00 text-ff rounded-3xl p-2 px-8'>CONTACT US</button>
            </div>
            <div className='grid grid-cols-2 gap-12 '>
                {info.map((info, index)=> (
                    <div key={index} className='space-y-2'>
                        <h1 className='text-75'>{info.title}</h1>
                        <div className='space-y-1 text-2a'>
                            {info.desc.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='border-t border-t-d6 py-5 grid grid-cols-4 items-center text-2a'>
            <h1 className='col-span-2'>DesignMinds® ©2023</h1>
            <div className='col-span-1 space-x-24'>
                <button className='py-2'>DRIBBBLE</button>
                <button className='py-2'>INSTAGRAM</button>
                <button className='py-2'>BEHANCE</button>
            </div>
            <div className='text-end'>BACK TO TOP</div>
        </div>

    </div>
  )
}

export default Footer