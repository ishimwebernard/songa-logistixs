import React from 'react'
import SongaMono from '../assets/songa_mono.png'

export default function Footer() {
    return (
        <div className='bg-blue-900 grid grid-cols-2 px-20 py-4'>
            <img src={SongaMono} className='' alt='songa logo mono' />
            <div className='p-4'>
                <p className='uppercase font-bold text-gray-50 py-2'>address</p>
                <p className='text-gray-200 px-4'>P.O Box 710 Kigali - Rwanda</p>
                <p className='text-gray-200 px-4'>KK1 . Kicukiro, Rwandex Road.</p>
                <p className='uppercase font-bold text-gray-50 py-2'>telephone</p>
                <p className='text-gray-200 px-4'>+250 788 307346</p>
                <p className='text-gray-200 px-4'>+250 788 553357</p>
                <p className='uppercase font-bold text-gray-50 py-2'>email</p>
                <p className='text-gray-200 px-4'> jeanbosco.songa@songalogistics.com</p>
                <p className='text-gray-200 px-4'>  info@songalogistics.com</p>

            </div>
        </div>
    )
}
