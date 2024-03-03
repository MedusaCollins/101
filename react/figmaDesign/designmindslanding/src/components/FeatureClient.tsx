import React from 'react'
import ClientComponent from './ClientComponent'

// @ts-ignore
import Spotify from '../assets/images/Spotify.png'
// @ts-ignore
import OffWhite from '../assets/images/OffWhite.png'
// @ts-ignore
import SkyStudio from '../assets/images/SkyStudio.png'
// @ts-ignore
import Lille from '../assets/images/Lille.png'

const FeatureClient = () => {
    const clients = [
        {
            img: Spotify,
            desc: "Spotify reached out to us to create a new design system and conduct an overhaul of the brand’s digital experience. The objective was to provide customers with seamless purchasing journeys and we did this by combining robust user experience with strong and engaging content.",
            alt: "VIEW CASE STUDY",
            to: "/"
        },
        {
            img: OffWhite,
            desc: "We were brought in to refresh their primary digital properties with a particular focus on building a robust eCommerce capability that re-imaged the way consumers purchase tyres, wheels and batteries online. We achieved this by crafting an informative and intuitive purchasing experience, backed by comprehensive usability research and validation.",
            alt: "VIEW CASE STUDY",
            to: "/"
        },
        {
            img: SkyStudio,
            desc: "In collaboration with sky’s development partner +OneX, we created a ”best-in-class” eCommerce experience underpinned and validated by an in- depth research study that focussed on incorporating the best possible UX principles and analyses.",
            alt: "VIEW CASE STUDY",
            to: "/"
        },
        {
            img: Lille,
            desc: "In collaboration with Promise Brand Specialists, we were tasked to create an elevated digital experience to reflect the innovative and performance-oriented nature of the brand. The primary goal of the website was to provide a seamless digital service when looking for key information as well as placing and paying for cement orders online.",
            alt: "VIEW CASE STUDY",
            to: "/"
        },
    ]

  return (
    <div className='space-y-24 my-24'>
        <h1 className='text-7xl text-2a'>FEATURE CLIENTS</h1>
        <div className='flex gap-5'>
            {clients.map((client, index) => (
                <ClientComponent key={index} img={client.img} desc={client.desc} alt={client.alt} to={client.to} />
            ))}
        </div>
    </div>
  )
}

export default FeatureClient