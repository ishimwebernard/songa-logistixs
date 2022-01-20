import React from 'react'
import Frontal from '../assets/foresvg.svg'

export default function SlideShow() {
    return (
        <div className='h-screen grid md:grid-cols-2 grid-rows-2 gap-4 h-screen md:px-20 px-5 bg-white'>
            <div className="  w-full lg:text-left m-auto sm:mt-20">
                <p className="deep-text justify-items-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">An even better way to 
                    <span className="deep-text my-blue"> ship your goods</span>
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Songa logistics is the best solution for you to ship faster your goods with every logistics component included
                </p>
            </div>
          <img src={Frontal} className="h-full"/>
        </div>
    )
}
