import React from 'react'
import Plane from '../assets/plane.png';
import Button from './button.js'
import Ocean from '../assets/ocean.png'
import Land from '../assets/land.png'
import Warehousing from '../assets/warehousing.png'

const Card = ({image, title, content, route}) =>{
    return (
        <div className='md:px-24 px-8 flex space-x-4 sm:relative' data-aos="fade-up">
        <img src={image} className='w-full h-full md:w-2/5 md:block hidden' alt="rty" />
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

const CardReverse = ({image, title, content, route}) =>{
    return (
        <div className='md:px-24 px-8 flex space-x-4' data-aos="fade-up">
        <div className='items-center h-full justify-center mt-12 '>
        <p className=' font-header text-2xl md:text-6xl text-gray-700'>{title}</p>
        <p className='text-gray-600 text-sm md:text-md mt-4'>{content}</p>
        <div className='py-12'>
        {/* <Button text='Read More'/> */}
        </div>
    </div>
    <img src={image} className='w-2/5 md:block hidden' alt="rty" />

</div>
    )
}

export default function Cards() {
    return (
        <div className='mt-16'>
            <div className='md:block hidden'>
            <Card image={Plane} title='Air Freight' content='Air Transport offers the fatest most and direct connection to point destination for your shipment. Air Freight is an essential component to any international logistics network. We can offer you choice and flexibility over the type of service available when sending freight by air.'/>
            <CardReverse image={Ocean} title='Ocean Freight'content="Vessels of various specifications help to move volume of cargo accross the world ' s seas and oceans. Ocean freight is far and away the most popular option for shipping goods internationally." />
            <Card image={Land} title='Land Freight' content='We offer land transport and tailor made distribution services across the entire East African region.'/>
            <CardReverse image={Warehousing} title='Warehousing' content='Importer or exporter, manufacturer, agriculturalist, machandise trader, antique specialist, we have a storage solution for you.'/>
          </div>



            <div className='md:hidden '>
            <Cardro image={Plane} title='Air Freight' content='Air Transport offers the fatest most and direct connection to point destination for your shipment. Air Freight is an essential component to any international logistics network. We can offer you choice and flexibility over the type of service available when sending freight by air.'/>
            <Cardro image={Ocean} title='Ocean Freight'content="Vessels of various specifications help to move volume of cargo accross the world ' s seas and oceans. Ocean freight is far and away the most popular option for shipping goods internationally." />
            <Cardro image={Land} title='Land Freight' content='We offer land transport and tailor made distribution services across the entire East African region.'/>
            <Cardro image={Warehousing} title='Warehousing' content='Importer or exporter, manufacturer, agriculturalist, machandise trader, antique specialist, we have a storage solution for you.'/>
            </div>
        </div>
    )
}
