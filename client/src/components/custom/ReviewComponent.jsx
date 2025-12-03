import React from 'react'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function ReviewComponent() {
  return (
    <div className='my-10 sm:my-20 w-[93vw] lg:w-[70vw] mx-auto'>
        <h3 className='font-extrabold text-2xl text-gray-800 dark:text-white mb-8 text-center'>
            Review
        </h3>

        {/* Write Review section */}
        <div className='rounded-lg'>
            <h4 className='font-semibold text-lg text-gray-700 dark:text-white mb-4'>
                Write a review
            </h4>
            <Textarea  placeholder="Your Review" className="mb-4"/>
            <div className='flex gap-5'>
                <Input  placeholder="rating (1-5)" type="number" max="5" min="1" className="mb-4 w-[10rem]"/>
                <Button>Submit Review</Button>
            </div>
            
        </div>
        {/* Revew Section */}
    </div>
  )
}

export default ReviewComponent