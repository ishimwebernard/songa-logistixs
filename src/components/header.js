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

const MenuItemMobile = ({text, link}) =>{
    return (
        <div>
            <Link to={link} className='border'>
            <p className='font-header font-semibold text-gray-700 text-xl px-8 py-4'>{text}</p></Link>
        </div>
    )
}

export default function Header({transluscent}) {
    const [burgerFolded, setBurgerFolded] = useState(false); 

    return (
           <div>
               <div>
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
        <div className='w-full md:hidden absolute top-0 z-50'>
            <div className=' w-full bg-gray-100 bg-opacity-95 grid grid-cols-3 items-center'>
                <img src={Logo} />
                <div></div>


<svg 
onClick={()=>{
    setBurgerFolded(!burgerFolded)
}}
xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 absolute right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>



            </div>
            <div className={burgerFolded ? 'grid grid-cols-3':'hidden'}>
                <div className='bg-gray-800 bg-opacity-30 w-full h-screen'></div>
                <div className='col-span-2 bg-gray-50'>
                <MenuItemMobile text='Home' link='/'/>
            <MenuItemMobile text='About Us' link='aboutus'/>
            <MenuItemMobile text='Services' link='services'/>
            <MenuItemMobile text='Gallery' link='gallery'/>
            <MenuItemMobile text='Contact' link='contact'/>
                </div>
            </div>

        </div>
               </div>
           </div>

    )
}
 