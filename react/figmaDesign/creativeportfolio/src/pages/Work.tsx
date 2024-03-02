import React from 'react'
// @ts-ignore
import Work1 from '../assets/icons/Work1.svg'
// @ts-ignore
import Work2 from '../assets/icons/Work2.svg'
// @ts-ignore
import Work3 from '../assets/icons/Work3.svg'
// @ts-ignore
import Work4 from '../assets/icons/Work4.svg'

const Work = () => {
  return (
    <div className='mx-auto space-y-3 gap-5 flex flex-col mt-6 max-w-[995px]'>
      <div>
        <h3 className='text-dark'>HOME / WORKS<span className='text-light'> / CASE STUDY</span></h3>
        <h1 className='text-dark text-5xl font-semibold'>Add a great project<br/>title of your choice</h1>
      </div>

      <div className='flex space-x-2'>
        <h3 className='border rounded-3xl p-2 px-4 text-light'>User Interface</h3>
        <h3 className='border rounded-3xl p-2 px-4 text-light'>UX & UI</h3>
        <h3 className='border rounded-3xl p-2 px-4 text-light'>User Experience</h3>
        <h3 className='border rounded-3xl p-2 px-4 text-light'>Mobile</h3>
      </div>

      <div className='bg-cloud flex justify-between '>
        <div className='pl-5 pt-12 w-[360px]'>
          <h1 className='text-3xl font-medium'>Is it really easy<br/> to use?<span className='text-primary'> Yes</span></h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet.<br/><br/> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
             Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <img src={Work1} alt="Work1" className='w-[559px] h-[559px] bg-cover'/>
      </div>

      <div className='w-[585px] space-y-3'>
        <h1 className='text-dark font-medium text-3xl'>Add a heading here</h1>
        <p className='text-bodyText'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className='space-y-6'>
        <img src={Work2} alt="Work2" className='w-full'/>
        <div className='flex justify-between'>
          <img src={Work3} alt="" />
          <img src={Work4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Work