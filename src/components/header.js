import React from 'react'
import { useState} from 'react'
import Logo from '../assets/logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom' 
import SL from '../assets/SL.png'
const MenuItem = ({text, link}) =>{
    return (
        <div>
            <Link to={link}>
            <p class="block py-2 pr-4 pl-3 text-gray-800  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{text}</p></Link>
        </div>
    )
}

const MenuItemMobile = ({text, link}) =>{
    return (
        <div>
            <Link to={link} className='border'>
            <p class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{text}</p></Link>
        </div>
    )
}

export default function Header({fixed}) {
    const [burgerFolded, setBurgerFolded] = useState(false); 
    var style = "border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800 w-full transluscent"
    if(fixed){
      style = style + " fixed z-20"
    }

    return (
           
        <nav class={style} id="nav" >
        <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex">
          <img class="mr-3 md:h-20 h-10" src={Logo}/>
        </a>
        <div class="flex md:order-2 px-5 md:px-0">
            <button type="button" class="text-white bg-my-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:block hidden">
              <Link to="/contact">Get a quote</Link>
            </button>
            <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
           <div>
           <svg onClick={()=>{
             setBurgerFolded(true)
           }} class={burgerFolded ? "hidden w-6 h-6":"w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg onClick={()=>{
               setBurgerFolded(false)
            }} class={burgerFolded ? "w-6 h-6":"hidden w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </div>
          </button>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <MenuItem text="Home" link="/"/>
            </li>
            <li>
              <MenuItem text="About Us" link="aboutus"/>
            </li>
            <li>
              <MenuItem text="Services" link="services"/>
            </li>
            {/* <li>
              <MenuItem text="Gallery" link="gallery"/>
            </li> */}
            <li>
              <MenuItem text="Contact" link="contact"/>
            </li>
          </ul>
        </div>
        </div>
        <div className={burgerFolded ? "h-full ":"hidden"}>
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <MenuItem text="Home" link="/"/>
            </li>
            <li>
              <MenuItem text="About Us" link="aboutus"/>
            </li>
            <li>
              <MenuItem text="Services" link="services"/>
            </li>
            {/* <li>
              <MenuItem text="Gallery" link="gallery"/>
            </li> */}
            <li>
              <MenuItem text="Contact" link="contact"/>
            </li>
          </ul>
        </div>
      </nav>

    )
}
