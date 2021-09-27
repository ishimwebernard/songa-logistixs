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
            <Header />
        <div className='px-24'>
        <div className='relative'>
                 <img className='object-fit w-full h-full relative' src={ServiceImage}/>
                 <div className='absolute top-0 bg-blue-900 w-full h-full bg-opacity-60 text-center justify-center '>
                     <div className='h-1/3'></div>
                     <p className='absolute  h-1/3 text-center w-full text-8xl text-gray-50 font-semibold justify-center'>SERVICES</p>
                 </div>
             </div>
             <div className='py-24'>
             <Tabs>
    <TabList>
      <Tab>Air Freight</Tab>
      <Tab>Ocean Freight</Tab>
      <Tab>Land Freight</Tab>
      <Tab>Warehousing</Tab>
      <Tab>Custom Services</Tab>
    </TabList>

    <TabPanel>
    <Card image={Plane} title='Air Freight' content='Importer or exporter, manufacturer, agriculturalist, machandise trader, antique specialist, we have a storage solution for you.

Our team can help you dertermine an optimal location, obtain the right climatic conditions and define the operational structure for running an efficient and economical distribution cycle .'/>

    </TabPanel>
    <TabPanel>
    <Card image={Ocean} title='Ocean Freight'content="Vessels of various specifications help to move volume of cargo accross the world ' s seas and oceans. Ocean freight is far and away the most popular option for shipping goods internationally." />
   
    </TabPanel>
    
    <TabPanel>
    <Card image={Land} title='Land Freight' content='We offer land transport and tailor made distribution services across the entire East African region.'/>
    </TabPanel>
    <TabPanel>
    <Card image={Warehousing} title='Warehousing' content='Importer or exporter, manufacturer, agriculturalist, machandise trader, antique specialist, we have a storage solution for you.'/>

    </TabPanel>
    <TabPanel>
        <Card image={Cst} content='Songa Logistics and Trade Services rely on extensive experience in facilitating trade, to develop and deliver new Total Quality Assured services for governments, customs, authorities and standards organisations.' title='Customs Services'/> 
    </TabPanel>
  </Tabs>
             </div>
        </div>
        <Footer/>
        </div>
    )
}
