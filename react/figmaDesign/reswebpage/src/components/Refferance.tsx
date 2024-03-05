// @ts-ignore
import borusan from '../assets/icons/refferance/borusan.svg';
// @ts-ignore
import akbank from '../assets/icons/refferance/akbank.svg';
// @ts-ignore
import aktas from '../assets/icons/refferance/aktas.svg';
// @ts-ignore
import akcan from '../assets/icons/refferance/akcan.svg';
// @ts-ignore
import amazon from '../assets/icons/refferance/amazon.svg';
// @ts-ignore
import bilgi from '../assets/icons/refferance/bilgi.svg';
// @ts-ignore
import bookmyshow from '../assets/icons/refferance/bookmyshow.svg';
// @ts-ignore
import ola from '../assets/icons/refferance/ola.svg';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Refferance = () => {
  const items: string[][] = [[borusan], [bilgi, bookmyshow], [akbank, akcan], [aktas, ola], [amazon]]
  return (
    <div className='bg-[#F4F5F7] lg:py-12 py-8 space-y-12'>
      <div className='text-center space-y-4'>
        <h1 className='font-extrabold lg:text-5xl text-4xl'>Referanslarımız</h1>
        <p className='lg:text-lg text-sm'>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
      </div>
      <div className='flex lg:flex-row flex-col justify-center items-center gap-5'>
        {items.map((item, indexMain: number) => (
          // @ts-ignore
          <div className='flex flex-col items-center justify-center gap-5'>
            {item.map((selectedItem, index: number) => (
              <div key={index} className={`bg-white rounded-xl p-5 shadow-md hover:scale-105 transition-all ${ indexMain > 2 && 'hidden lg:block' }`}>
                <img src={selectedItem} alt={selectedItem} className='w-36 h-16' />
              </div>
            ))}
            {indexMain === 2 &&
              <div className='bg-white text-red-500 font-semibold shadow-md hover:scale-105 transition-all rounded-xl p-5
              flex gap-5 justify-center items-center w-full h-[104px]'>
                <p>Tümünü Gör</p><FontAwesomeIcon icon={faArrowRight} />
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Refferance