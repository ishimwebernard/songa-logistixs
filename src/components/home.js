import React from 'react'
import Header from './header'
import Frontal from './slideshow' 
import Cards from './cards'
import Footer from './footer'
 
export default function Home() {
    return (
        <div>
            <Header  />
            <Frontal />
            <Cards />
            <Footer />
        </div>
    )
}
