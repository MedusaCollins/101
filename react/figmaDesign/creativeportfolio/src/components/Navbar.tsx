import React from 'react'
import LogoWithText from '../shared/LogoWithText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='flex justify-between items-center shadow-md w-full py-3.5 md:px-[100px] sm:px-2.5'>
        <LogoWithText dark={false}/>

        <div className='space-x-5'>
            <div className='sm:flex hidden'>
                <Link to="/" className='p-2.5'><h2 className={`${location.pathname === "/" && "text-primary"}`}>Home</h2></Link>
                <Link to="/works" className='p-2.5'><h2 className={`${location.pathname === "/works" || location.pathname === "/work" ? "text-primary":null}`}>Works</h2></Link>
                <Link to="/blogs" className='p-2.5'><h2 className={`${location.pathname === "/blogs" && "text-primary"}`}>Blog</h2></Link>
                <Link to="/contact" className='p-2.5'><h2 className={`${location.pathname === "/contact" && "text-primary"}`}>Contact</h2></Link>
            </div>
            <div className='sm:hidden block'>
                <button className='p-2.5'><h2><FontAwesomeIcon icon={faBars}/></h2></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar