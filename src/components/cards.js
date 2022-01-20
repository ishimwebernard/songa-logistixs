import React from 'react'
import Plane from '../assets/plane.png';
import Button from './button.js'
import Ocean from '../assets/ocean.png'
import Land from '../assets/land.png'
import Warehousing from '../assets/warehousing.png'




const Card = ({image, title, content, route}) =>{
    return (
        <div class=" bg-white grid md:grid-cols-2 place-items-center gap-8 w-full h-full">
            <div className="space-y-10 px-4">
                <p className=" deep-text md:text-4xl text-lg">{title}</p>
                <p className='   md:text-xl text-gray-500 text:sm'>{content}</p>
            </div>

       <img src={image} className="w-full"/>

    </div>
    )
}
const CardReverse = ({image, title, content, route}) =>{
    return (
        <div class="  grid md:grid-cols-2 place-items-center md:gap-8 gap-4 w-full h-full">
            
       <img src={image} className="w-full"/>
            <div className="space-y-10 px-4">
                <p className=" deep-text md:text-4xl text-lg">{title}</p>
                <p className='   md:text-xl text-gray-500 text:sm'>{content}</p>
            </div>


    </div>
    )
}

export default function Cards() {
    return (
        <div className='mt-16 px-5 md:px-20 space-y-4'>
            
            <Card image={Plane} title='Air Freight' content='Air Transport offers the fatest most and direct connection to point destination for your shipment. Air Freight is an essential component to any international logistics network. We can offer you choice and flexibility over the type of service available when sending freight by air.'/>
            <CardReverse image={Ocean} title='Ocean Freight'content="Vessels of various specifications help to move volume of cargo accross the world ' s seas and oceans. Ocean freight is far and away the most popular option for shipping goods internationally." />
            <Card image={Land} title='Land Freight' content='We offer land transport and tailor made distribution services across the entire East African region.'/>
            <CardReverse image={Warehousing} title='Warehousing' content='Importer or exporter, manufacturer, agriculturalist, machandise trader, antique specialist, we have a storage solution for you.'/>
       

        </div>
    )
}
