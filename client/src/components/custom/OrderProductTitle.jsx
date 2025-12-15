import React from 'react'

function OrderProductTitle() {
  return (
    <div className='flex justify-between items-start sm:items-center p-3 rounded-lg bg-gray-100 dark:bg-zinc-900'>
        <div className='flex flex-row items-center gap-2'>
            <img src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg" alt=""
            className='w-20 sm:w-24 rounded-lg'
            />
            <div className='grid sm:gap-1'>
                <h1 className='font-semibold text-sm sm:text-base'>Cosmic byte keyboard</h1>
                <p className='flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-gray-500 text-xs sm:text-sm my-0'>
                    <span className='font-semibold'>Color : {" "}
                        <span style={{backgroundColor:"#ffffff"}}>#ffffff</span>
                    </span>
                    <span className='hidden sm:block'>|</span>
                    <span className='font-semibold'>Qty : {" "}
                        <span className='font-medium text-yellow-700'>2</span>
                    </span>
                    <span className='hidden sm:block'>|</span>
                      <span className='font-semibold'>Price : {" "}
                        <span className='font-medium text-yellow-600'>₹567</span>
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default OrderProductTitle