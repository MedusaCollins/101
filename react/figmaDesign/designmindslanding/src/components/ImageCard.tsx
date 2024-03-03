import React from 'react'

type Props = {
    img: string,
    tags: string[],
    year: number,
    title: string,
    productID: number
}
const ImageCard = ({img, tags,year, title, productID}:Props) => {
  return (
    <div className='flex'>
        <div className='flex flex-col gap-2'>
            <img src={img} alt="product" className=''/>
            <hr className='h-px border-0 bg-2a mt-2'/>
            <div>
                <div className='flex justify-between'>
                    <p>{tags.map((tag, index:number)=> (
                        <span key={index} className='text-sm'>{tag}{index !== tags.length - 1 && " - "}</span>
                        ))}
                    </p>
                    <h2>{year}</h2>
                </div>
                <h1 className='text-2xl'>{title}</h1>
            </div>

        </div>
        <h3 className='-rotate-90 cursor-vertical-text w-fit h-fit pt-2'>00-{productID}</h3>
    </div>
  )
}

export default ImageCard