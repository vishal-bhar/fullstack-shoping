import { Colors } from '@/constant/colors'
import React from 'react'

function CheckOutProduct(name='Custom design keyboat',price=200,quantity=2,
image={
    url :'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?_gl=1*nhu2mw*_ga*MTI5NzA3MzY1LjE3MDk0NDMzODM.*_ga_8JE65Q40S6*czE3NjQwNjg3MjgkbzYkZzEkdDE3NjQwNjk1NDAkajU2JGwwJGgw'},
color=Colors.customYellow) {
  return (
    <div className='flex justify-between items-start p-3 rounded-lg bg-gray-100 dark:bg-zing-900'>
        <div className='flex flex-row items-center gap-2'>
            <img src={image.url} alt={name} className='w-20 sm:w-24 rounded-lg' />
           <div className='grid sm:gap-1'> 
            <h1 className='font-semibold text-sm sm:text-base'>Custom design keyboat</h1>
            <p className='flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-black text-xs sm:text-sm my-0'>
                <span className='font-semibold'>
                    Color : <span style={{backgroundColor:color}}>{color}</span>
                    </span>
                    <span className='hidden sm:block'>|</span>
                    <span className='font-semibold'>qty: <span className='font-medium text-yellow-600'>{quantity}</span></span>
                    <span className='hidden sm:block'>|</span>
                    <span className='font-semibold'>Price: <span className='font-medium text-yellow-600'>₹599</span></span>
            </p>
            </div>
        </div>
    </div>
  )
}

export default CheckOutProduct