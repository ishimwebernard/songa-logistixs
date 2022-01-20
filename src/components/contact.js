import React from 'react'
import Header from './header'
import ContactPicture from '../assets/contact.png';
import Footer from './footer'
import FormatEmail from './formatEmail'
import sendEmail from './sendEmail';
import {useState} from 'react'
import axios from 'axios'

export default function Contact() {

    var message = '';
    var name ='';
    var email ='';
    var subject = '';
    return (
        <div>
      <Header fixed={true} />
            <div className="relative">
                <Header />
                <div className='absolute top-0 bg-white w-full h-full'>
                    </div>
            </div>
        <div className="grid grid-rows-2 place-items-center md:h-screen w-full py-10 px-5">
            
            <div className="row-span-2 md:text-center text-left">
                <p className="font-semibold text-my-red">CONTACT US</p>
                <p className="font-extrabold deep-text md:text-6xl text-gray-800 text-4xl">DM us</p>
                <p>We are happy to help!</p>
                </div>

        </div>
       <div className="md:grid md:grid-cols-2 gap-8 place-items-center bg-white md:px-20 px-5">
           <img src={ContactPicture} className="md:h-full md:object-cover hidden" />
           <div>
                <input onChange={(e)=>{
                    name = e.target.value
                }} type='text/plain' placeholder='Enter your name' className='border border-gray-300 w-full p-2 rounded-lg mt-12 focus:outline-none'/>
             <input  onChange={(e)=>{
                    email = e.target.value
                }} type='email' placeholder='Enter your email' className='border border-gray-300 w-full p-2 mt-4 rounded-lg  focus:outline-none'/> 
             <input  onChange={(e)=>{
                    subject = e.target.value
                }} type='email' placeholder='Enter your subject' className='border border-gray-300 w-full p-2 mt-4 rounded-lg  focus:outline-none'/> 
            
             <textarea  onChange={(e)=>{
                    message = e.target.value
                }} type='text/plain' placeholder='Enter your message' className='border h-36 border-gray-300 w-full p-2 rounded-lg mt-4  focus:outline-none'/>
             <div className='py-8'>
             <button onClick={async()=>{
                
                 const res = await axios(
                    {    method: 'post',
                         url: 'https://songa-backend-2022.herokuapp.com/',
                        data: {name, email,message}

                    });
                 alert("Thank you for sending us a DM, we will get to you shortly")   
                   
             }} type="button" class="text-white bg-my-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </div>  
       </div> </div>
       <div className='h-4'></div>
       <Footer />
   
   </div>
    )
}
