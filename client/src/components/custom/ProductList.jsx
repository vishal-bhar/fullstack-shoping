import React from 'react'
import Productcard from './Productcard'

function ProductList() {
  return (
    <div className='w-[93vw] grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-5 place-content-center my-10'>
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
     


    </div>
  )
}

export default ProductList