import React from 'react'

// @ts-ignore
import file from '../assets/icons/File.svg';
// @ts-ignore
import star from '../assets/icons/Star.svg';
// @ts-ignore
import crown from '../assets/icons/Crown.svg';
// @ts-ignore
import chartBar from '../assets/icons/ChartBar.svg';
// @ts-ignore
import chartPieSlice from '../assets/icons/ChartPieSlice.svg';
// @ts-ignore
import figmaLogo from '../assets/icons/FigmaLogo.svg';

const Quality = () => {
    const items = [
        {
            icon: file,
            title: 'Döküman Analizi',
            desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.' 
        },
        {
            icon: star,
            title: 'Kabul ve Değerlendirme',
            desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.' 
        },
        {
            icon: crown,
            title: 'İş Kuralları Analizi',
            desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.' 
        },
        {
            icon: chartBar, 
            title: 'Akış Diyagramları',
            desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.' 
        },
        {
            icon: chartPieSlice,
            title: 'Paydaş Analizi',
            desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.' 
        },
        {
            icon: figmaLogo,
            title: 'Prototipleme',
            desc: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.' 
        }
    ]
  return (
    <div className='flex flex-col justify-center items-center text-center my-20 gap-20 xl:px-32 lg:px-20 px-8'>
        <div className='space-y-8 max-w-[994px] tracking-wide'>
            <h1 className='text-3xl font-extrabold'>Kalite ve Süreç Yönetimi</h1>
            <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24'>
            {items.map((item, index) => (
                <div key={index} className='flex flex-col items-center gap-2'>
                    <img src={item.icon} alt="" />
                    <h1 className='font-extrabold text-2xl'>{item.title}</h1>
                    <p className='w-64'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Quality