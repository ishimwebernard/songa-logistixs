import React from 'react'

export default function Button({text}) {
    return (
        <span className='bg-blue-900 px-12 py-4 rounded-3xl cursor-pointer'>
            <span className='font-header font-semibold text-gray-50'>{text}</span>
        </span>
    )
}
