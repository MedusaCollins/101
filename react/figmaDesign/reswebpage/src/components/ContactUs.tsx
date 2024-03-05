import React from 'react'

// @ts-ignore
import user from '../assets/icons/Users.svg'
const ContactUs = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center py-24'>
      <img src={user} alt="" /> 
      <div className='space-y-2 text-center'>
        <h1 className='text-5xl font-extrabold'>Bize Ulaşın</h1>
        <p className='lg:text-lg font-medium'>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</p>
      </div>
      <button className='p-3 px-6 text-white bg-[#F84646] rounded-md'>Bize Ulaşın</button>
    </div>
  )
}

export default ContactUs