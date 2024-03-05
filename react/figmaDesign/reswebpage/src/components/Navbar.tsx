import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className='w-full py-9 mb-24 flex sm:justify-end justify-between font-semibold md:space-x-7 space-x-5 lg:text-base text-sm xl:px-32 lg:px-20 px-8'>
                <div className='flex sm:hidden items-center space-x-10'><FontAwesomeIcon icon={faBars}/></div>
                <button className='hidden sm:block'>Çözüm ve Hizmetler</button>
                <button className='hidden sm:block'>Ürünler</button>
                <button className='hidden sm:block'>Teknolojiler</button>
                <button className='hidden sm:block'>İnsan Kaynakları</button>
                <button className='hidden sm:block'>Kurumsal</button>
            <button className='bg-[#f84646] text-white rounded-md p-2 px-5'>İletişim</button>
    </div>
  )
}

export default Navbar