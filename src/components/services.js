import React from 'react'
import Header from './header' 
import ServiceImage from '../assets/service.png'
import Cards from './cards'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Plane from '../assets/plane.png';
import Button from './button.js'
import Ocean from '../assets/ocean.png'
import Land from '../assets/land.png'
import Warehousing from '../assets/warehousing.png'
import Footer from './footer'
import Cst from '../assets/cst.png'
import 'react-tabs/style/react-tabs.css';

const Cardro = ({image, title, content, route}) =>{
    return (
        <div className='md:px-24 px-4 md:flex md:space-x-4 sm:relative' data-aos="fade-up">
            <img src={image} className='w-2/5 md:block w-full object-cover h-40 md:h-full' alt="rty" />
            <div className='items-center h-full justify-center mt-12 sm:w-full'>
                <p className=' font-header text-2xl md:text-6xl text-gray-700'>{title}</p>
                <p className='text-gray-600  text-sm  md:text-md mt-4'>{content}</p>
                <div className='py-12'>
                {/* <Button text='Read More'/> */}
                </div>
            </div>
        </div>
    )
}

const Card = ({image, title, content, route}) =>{
    return (
        <div className=' flex space-x-4' data-aos="fade-up">
            <img src={image} className='w-2/5' alt="rty" />
            <div className='items-center h-full justify-center mt-12 '>
                <p className=' font-header text-6xl text-gray-700'>{title}</p>
                <p className='text-gray-600 text-md mt-4'>{content}</p>
                <div className='py-12'>
                </div>
            </div>
        </div>
    )
}

export default function Services() {
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
                     <p className="font-semibold text-my-red">SERVICES</p>
                     <p className="font-extrabold deep-text md:text-6xl text-gray-800 text-4xl">Here's what we offer</p>
                     <p>We offer different services in the logistics field.</p>
                     </div>

             </div>
            <div className="md:grid md:grid-cols-2 gap-8 place-items-center bg-white md:px-20 px-5">
                <img src={ServiceImage} className="md:h-full md:block hidden" />
                <div>
                    <p className="font-semibold text-my-red md:block hidden">SERVICES</p>
                    <p className="font-extrabold deep-text text-5xl text-gray-800 md:block hidden">
                    Our Offers
                    </p>
                    <p className="mt-10">
                    We offer different services including
                    </p>
                    <p className="font-extrabold text-4xl deep-text mt-10 text-gray-800">
                        Air Freight
                    </p>
                    <p className="mt-10">
                    Importer or exporter, manufacturer, agriculturalist, machandise trader, antique specialist, we have a storage solution for you. Our team can help you dertermine an optimal location, obtain the right climatic conditions and define the operational structure for running an efficient and economical distribution cycle .                    </p>
                    <p className="font-extrabold text-4xl deep-text mt-10 text-gray-800">
                    Ocean Freight
                    </p>
                    <p className="mt-10">
                    Vessels of various specifications help to move volume of cargo accross the world ' s seas and oceans. Ocean freight is far and away the most popular option for shipping goods internationally.                    </p>
                    <p className="font-extrabold text-4xl deep-text mt-10 text-gray-800">
                    Land Freight
                    </p>
                    <p className="mt-10">
                    We offer land transport and tailor made distribution services across the entire East African region.
                    </p>
                    <p className="font-extrabold text-4xl deep-text mt-10 text-gray-800">
                    Warehousing
                    </p>
                    <p className="mt-10">
                    Importer or exporter, manufacturer, agriculturalist, machandise trader, antique specialist, we have a storage solution for you.
                    </p>
                    <p className="font-extrabold text-4xl deep-text mt-10 text-gray-800">
                    Customs Services
                    </p>
                    <p className="mt-10">
                    Songa Logistics and Trade Services rely on extensive experience in facilitating trade, to develop and deliver new Total Quality Assured services for governments, customs, authorities and standards organisations.                    </p>
                </div>
            </div>
            <div className='h-4'></div>
            <Footer />
        
        </div>
    )
}
