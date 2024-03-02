import React from 'react'
import Hero from '../components/Hero'
import RecentProject from '../components/RecentProject'
import LatestNews from '../components/LatestNews'

const Home = () => {
  return (
    <div className='w-full space-y-6'>
        <Hero/>
        <RecentProject/>
        <LatestNews/>
    </div>
  )
}

export default Home