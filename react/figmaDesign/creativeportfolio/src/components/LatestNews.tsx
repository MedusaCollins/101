import React from 'react'
import BigNewsCard from './BigNewsCard'

// @ts-ignore
import newsCard1 from '../assets/icons/NewsCard1.svg'
// @ts-ignore
import newsCard2 from '../assets/icons/NewsCard2.svg'
// @ts-ignore
import newsCard3 from '../assets/icons/NewsCard3.svg'
import SmallNewsCard from './SmallNewsCard'


const LatestNews = () => {
  return (
    <div className='md:px-[100px] py-8 sm:px-2.5 space-y-12'>
      <div className='flex justify-between items-center'>
        <h1 className='text-5xl text-dark font-semibold'>Latest News and Blogs</h1>
        <button className='border-2 border-primary text-primary text-2xl p-3 rounded-md'>More Views</button>
      </div>
      <div className='grid grid-cols-2 '>
        <BigNewsCard
          img={newsCard3} 
          date="12 Jan 2022" 
          title="Add a master title" 
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        />

        <div className='flex flex-col space-y-6'>
            <SmallNewsCard 
              img={newsCard1} 
              date="12 Jan 2022" 
              title="The key to clean user interface design" 
              desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <hr className="w-full border-gray-300" />
            <SmallNewsCard 
              img={newsCard2} 
              date="12 Jan 2022" 
              title="The key to clean user interface design" 
              desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
        </div>
      </div>

    </div>
  )
}

export default LatestNews