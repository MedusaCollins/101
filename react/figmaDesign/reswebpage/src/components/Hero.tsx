import React from 'react'

const Hero = () => {
  return (
    <div className=''>
        <div className='flex flex-col text-center sm:text-left xl:px-32 lg:px-20 px-8 gap-5'>
            <h1 className='sm:text-6xl text-4xl font-extrabold mb-6 sm:mb-0 leading-relaxed'>Bilgi Teknolojilerinde<br/> 23 Yıllık Tecrübe</h1>
            <p className='sm:leading-7 leading-6 max-w-[650px]'>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
            <div className='mt-12 bg-white sm:w-fit w-full flex justify-between rounded-md p-1'>
                <input type="text" className='outline-none text-gray-400 sm:pl-6 pl-3' placeholder='Mail bültenimize kayıt ol'/>
                <button className='bg-[#F84646] text-white p-3 sm:px-6 px-3 rounded-md'>Kayıt ol</button>
            </div>
        </div>
    </div>
  )
}

export default Hero