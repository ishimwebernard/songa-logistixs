import React from 'react'
import Frontal from '../assets/frontal.gif'

export default function SlideShow() {
    return (
        <div className='md:px-24 mt-12 md:mt-0'>
           <img src={Frontal} className='w-full md:rounded-xl' /> 
        </div>
    )
}
