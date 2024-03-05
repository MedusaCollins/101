import React from 'react'

// @ts-ignore
import rightArrow from '../assets/icons/CaretCircleDoubleRight.svg';

const Process = () => {
  const items = [
    "Yazılım Kalitesini Arttırıyoruz","Olası Hataları Önceden Belirliyoruz","Oluşabilecek Riskleri Önlüyoruz","Zaman ve Maliyetten Tasarruf Sağlıyoruz"
  ]
  return (
    <div className='bg-[#F84646] text-white min-h-[336px] w-full px-4 py-12 flex flex-col justify-around items-center'>
      <div className='text-center space-y-6'>
        <h1 className='text-5xl font-extrabold'>Test Yönetimiyle Neler Sağlıyoruz?</h1>
        <p>IoT Destekli Çözümler</p>
      </div>
      <div className='flex lg:flex-row flex-col lg:gap-12 gap-8 mt-16'>
        {items.map((item,index) => (
          <div key={index} className='flex flex-col lg:flex-row items-center lg:gap-2 gap-5'>
            <span className='w-48 font-bold lg:text-left text-center'>{item}</span>
            {index !== items.length -1 && (<img src={rightArrow} alt='arrow' className='rotate-90 lg:rotate-0 w-12'/>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Process