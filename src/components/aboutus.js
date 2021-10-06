import React from 'react'
import Header from './header'
import AboutusImage from '../assets/aboutusimage.png'
import Footer from './footer'

export default function AboutUs() {
    return (
        <div>
             <Header />
            <div className='md:px-24 mt-12 md:mt-0'>
            <div className='relative w-full'>
                 <img className='object-fit w-full h-full relative' src={AboutusImage}/>
                 <div className='absolute top-0 bg-blue-900 w-full h-full bg-opacity-60 text-center justify-center '>
                     <div className='h-1/3'></div>
                     <p className='absolute  h-1/3 text-center w-full text-4xl md:text-8xl text-gray-50 font-semibold justify-center'>ABOUT US</p>
                 </div>
             </div>
           <div className='md:px-0 px-8'>
           <div className='mt-8'>
       <div className='mt-20 md:py-12'>
       <p className='font-header text-4xl md:text-6xl text-gray-700 mt-8'>Who we are
                     </p>
                     <p className='text-gray-600 text-md mt-4 md:w-1/2 md:tracking-wide'>
                  
                  
                           Established in 2017, Songa Logistics Ltd. is Rwanda's fast-growing leader in the freight-forwarding, transportation and logistics industry. 

                           <div className='h-6'></div>
                           We provide customers in Rwanda, Africa and worldwide with expedited air, ground and ocean heavyweight services, in addition to project management, reverse logistics, warehousing and specialised disribution, custom brokerage and compliance and logistics services.
                           <div className='h-4'></div>
                       Songa Logistics also designs customized solutions to tailor-fit customer-specific needs. 
                     
                      
                  
                     </p>
       </div>
  <div className='flex py-12 md:ml-24'>
  <div className=' md:w-1/2'>
                    <p className='font-header text-4xl md:text-6xl text-gray-700 mt-8 '>Mission
                     </p>
                     <p className='text-gray-600 text-md mt-4 md:tracking-wide'>
                     To provide our customers with safe and effiecient logistics services in Rwanda and around the globe.</p>
                    </div>
                <div className='md:p-8 md:justify-right'>

                </div>
  </div>
                  <div className='md:py-12 md:w-1/2 md:ml-48'>
                  <p className='font-header text-4xl md:text-6xl text-gray-700 mt-8'>Your Partner in Progress
                     </p>
                     <p className='text-gray-600 text-md mt-4 md:tracking-wide'>
                     When your core business is into sourcing raw materials, manufacturing, trading, repairing and installatiopn, or consultancy services, there is no need to strain yourself by monitoring the logistics processes.

Songa Logistics Ltd. will be your One Stop Logistics Partner for all your supply chain requirements wherein we will help design the ideal transportation process for your distribution network model so that the right product reaches the right place at the right time.

We streamline oprations and cut costs by optimizing your transportation management services. We offer reliable costeffective logistics solutions and help you maximize efficiency. Find out how we can help your business become a super success.</p>
                  </div>
                
            </div>
            </div>
           </div>
            <div className='h-4'></div>
            <Footer />
        
        </div>
    )
}
