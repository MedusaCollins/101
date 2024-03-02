import React from 'react'
// @ts-ignore
import logo from '../assets/icons/Logo.svg';
import { Link } from 'react-router-dom';

type Props = {
    dark: boolean;
}
const LogoWithText = ({dark}: Props) => {
    
    return (
        <Link to="/" className='flex space-x-1 items-center'>
            <img src={logo} alt="logo"/>
            <h1 className={`text-3xl ${!dark ? "text-dark": "text-white"} font-bold hidden sm:flex`}>brand.<h2 className='font-medium'>co</h2></h1>
        </Link>
    );
}

export default LogoWithText;
