import React from 'react'

// @ts-ignore
import kalite from '../assets/photos/kalite.png';
// @ts-ignore
import test1 from '../assets/photos/test-1.png';
// @ts-ignore
import test2 from '../assets/photos/test-2.png';
const Discover = () => {
  const items = [
    {
      title: "Kalite ve Süreç Yönetimi",
      decs: "Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.",
      img: kalite
    },
    {
      title: "Test Yönetimi ve Analizi",
      decs: "Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır.",
      img: test1
    }

  ]
  return (
    <div className='xl:px-32 lg:px-20 px-8 mt-36 space-y-24 mb-24'>
      {items.map((item, index) => (
        <div key={index} className='grid grid-cols-1 lg:grid-cols-2 justify-between xl:gap-24 gap-12'>
          <div className={`${index === 0 ? 'order-last lg:order-first':'order-last'} flex flex-col lg:justify-between lg:items-start items-center`}>
            <div className='space-y-12 text-center lg:text-left flex flex-col max-w-[500px]'>
              <h1 className='lg:text-6xl text-4xl font-bold'>{item.title}</h1>
              <p className='text-[#808080] leading-7'>{item.decs}</p>
            </div>
            <button className='bg-[#F84646] p-2 px-8 mt-12 rounded-md text-white lg:w-fit w-full'>Keşfet</button>
          </div>
          <img src={item.img} alt="item" className='mx-auto lg:mx-0 lg:h-[480px] object-cover rounded-md'/>
        </div>
      ))}
    </div>
  )
}

export default Discover