import React from 'react'
import Header from './header'
import AboutusImage from '../assets/aboutusimage.png'
import Footer from './footer'

export default function AboutUs() {
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
                     <p className="font-semibold text-my-red">ABOUT US</p>
                     <p className="font-extrabold deep-text md:text-6xl text-gray-800 text-4xl">Let's introduce ourselves</p>
                     <p>We are a Rwanda based logistics company. We have been serving since 2017</p>
                     </div>

             </div>
            <div className="md:grid md:grid-cols-2 gap-8 place-items-center bg-white md:px-20 px-5">
                <img src={AboutusImage} className="md:h-full md:block hidden" />
                <div>
                    <p className="font-semibold text-my-red">GET TO KNOW US</p>
                    <p className="font-extrabold deep-text text-5xl text-gray-800">
                    About us
                    </p>
                    <p className="mt-10">
                    Established in 2017, Songa Logistics Ltd. is Rwanda's fast-growing leader in the freight-forwarding, transportation and logistics industry.
We provide customers in Rwanda, Africa and worldwide with expedited air, ground and ocean heavyweight services, in addition to project management, reverse logistics, warehousing and specialised disribution, custom brokerage and compliance and logistics services.
Songa Logistics also designs customized solutions to tailor-fit customer-specific needs.
                    </p>
                    <p className="font-extrabold text-4xl deep-text mt-10 text-gray-800">
                        Mission
                    </p>
                    <p className="mt-10">
                    To provide our customers with safe and effiecient logistics services in Rwanda and around the globe.
                    </p>
                    <p className="font-extrabold text-4xl deep-text mt-10 text-gray-800">
                    Your Partner in Progress
                    </p>
                    <p className="mt-10">
                    When your core business is into sourcing raw materials, manufacturing, trading, repairing and installatiopn, or consultancy services, there is no need to strain yourself by monitoring the logistics processes. Songa Logistics Ltd. will be your One Stop Logistics Partner for all your supply chain requirements wherein we will help design the ideal transportation process for your distribution network model so that the right product reaches the right place at the right time. We streamline oprations and cut costs by optimizing your transportation management services. We offer reliable costeffective logistics solutions and help you maximize efficiency. Find out how we can help your business become a super success.
                    </p>
                </div>
            </div>
            <div className='h-4'></div>
            <Footer />
        
        </div>
    )
}
