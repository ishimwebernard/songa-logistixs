import React from 'react'
import Header from './header'
import ContactPicture from '../assets/contact.png';
import Button from './button'
import Footer from './footer'

export default function Contact() {
    return (
        <div>
            <Header />
            <div className='md:px-24'>
            <div className='relative md:mt-0 mt-12'>
                 <img className='object-fit w-full h-full relative' src={ContactPicture}/>
                 <div className='absolute top-0 bg-blue-900 w-full h-full bg-opacity-60 text-center justify-center '>
                     <div className='h-1/3'></div>
                     <p className='absolute  h-1/3 text-center w-full text-4xl md:text-8xl text-gray-50 font-semibold justify-center uppercase'>CONTACT</p>
                 </div>
             </div>
          <div className='md:w-2/3 w-full px-4'>
          <p className='font-header mt-12 font-semibold text-4xl md:text-6xl text-gray-700'>Talk to us!</p>
             <input type='text/plain' placeholder='Enter your name' className='border border-gray-300 w-full p-2 rounded-lg mt-12 focus:outline-none'/>
             <input type='email' placeholder='Enter your email' className='border border-gray-300 w-full p-2 mt-4 rounded-lg  focus:outline-none'/> 
             <textarea type='text/plain' placeholder='Enter your message' className='border h-36 border-gray-300 w-full p-2 rounded-lg mt-4  focus:outline-none'/>
             <div className='py-8'>
             <Button text='Send'/>
             </div>
          </div>
            </div>
        <Footer />
        </div>
    )
}
