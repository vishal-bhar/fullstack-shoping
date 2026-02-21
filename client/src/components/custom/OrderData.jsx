import React from 'react'
import { Card } from '../ui/card'
import { ArrowDownToLine, IndianRupee,  } from 'lucide-react'

function OrderData({
  amount=100, 
   address="123,abc street ,xyz city",
  status="pending",
  createdAt="2021-09-01",
  updatedAt="2021-09-01"
  }) {


  return <Card className="grid gap-2 p-5">
    <div className='flex flex-col sm:flex-row justify-between items-end sm:items-center border p-3 rounded-lg 
    bg-gray-900 dark:bg-zinc-900 '>
      <div className='flex items-center gap-2 text-gray-600'>
        <img src="https://images.pexels.com/photos/36071298/pexels-photo-36071298.jpeg" alt=""
        className='w-20 h-20 rounded-lg'
        />
        <div className='grid gap-1'>
          <h1 className='font-semibold text-sm sm:text-lg text-white'> Mechanical Keyboard with ghosting keys</h1>
             <p className='flex text-xs sm:text-md gap-2 sm:gap-2 text-gray-500 my-2 sm:my-0'>
                <span className=''>
                    Color : <span style={{backgroundColor:"blue"}}>{"blue"}</span>
                    </span>
                    <span className='hidden sm:block'>|</span>
                    <span className='font-semibold '>Status: <span className='capitalize'>{status}</span></span>
            </p>
        </div>
      </div>
      <div className='flex sm:flex-col gap-3 sm:gap-0 mt-2 sm:mt-0 sm:items-center'>
        <h2 className='text-md sm:text-xl font-bold flex items-center dark:text-yellow-300'>
          <IndianRupee size={18} /> 
          499
        </h2>
        <p className='dark:text-yellow-400 text-end'>qty : 1</p>
      </div>
    </div>


    <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
    <span >
      Ordered On : <span className='capitalize'>01/10/2025</span>
      </span>
      <span className='hover:underline text-sm cursor-pointer flex items-center gap-1 dark:text-yellow-300'>
      <ArrowDownToLine size={15}/>
      Download Invoice
      </span>
    </div>
    <hr />
    <span>Delivery At : <span className='capitalize'>05 Jan</span></span>
  </Card>
}

export default OrderData
