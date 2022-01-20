import React from 'react'
import Header from './header'
import Frontal from './slideshow' 
import Cards from './cards'
import Footer from './footer'
 
export default function Home() {
    return (
        <div className="relative">
          
       
            <Header fixed={true} />
            <div className="relative">
                <Header />
                <div className='absolute top-0 bg-white w-full h-full'>
                    </div>
            </div>
            <Frontal />
            <Cards />
            <Footer />
        </div>
    )
}
