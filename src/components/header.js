import React from 'react'
import { useState} from 'react'
import Logo from '../assets/logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom' 
import SL from '../assets/SL.png'
const MenuItem = ({text, link}) =>{
    return (
        <div>
            <Link to={link}>
            <p className='font-header font-semibold text-gray-700 hover:text-gray-400 cursor-pointer'>{text}</p></Link>
        </div>
    )
}

export default function Header({transluscent}) {
    return (
            <div className={transluscent ? ' flex md:px-24 md:py-4 space-x-12 transluscent w-full bg-gray-100 bg-opacity-95':' flex md:px-24 md:py-4 space-x-12 w-full bg-gray-100 bg-opacity-95 '}>
            
            <img src={Logo} className='hidden md:block  md:w-1/6'/>
            <div className='hidden md:flex  space-x-8 justify-center items-center  '>
            <MenuItem text='Home' link='/'/>
            <MenuItem text='About Us' link='aboutus'/>
            <MenuItem text='Services' link='services'/>
            <MenuItem text='Gallery' link='gallery'/>
            <MenuItem text='Contact' link='contact'/>
            </div>
           
        </div>

    )
}
 