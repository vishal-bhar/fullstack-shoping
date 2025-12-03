import { Star } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import LinkButton from './LinkButton';
import {starsGenerator} from "../../constant/Helper"

function Productcard({name="Product Tittle",price=2000,rating=4,image={
    url:'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?_gl=1*nhu2mw*_ga*MTI5NzA3MzY1LjE3MDk0NDMzODM.*_ga_8JE65Q40S6*czE3NjQwNjg3MjgkbzYkZzEkdDE3NjQwNjk1NDAkajU2JGwwJGgw',
    id:"234kjkj"

}}) {
  return (
    <div className='relative border w-full overflow-clip grid z-1 hover:shadow-md rounded-2xl'>
        
        <img src={image.url} alt={name} className='"object-cover w-[30rem] h-[20rem]' />

        <div className='px-3 grid gap-1 py-2 absolute bg-white dark:bg-zing-900 w-full bottom-0 translate-y-[3rem]
         hover:translate-y-0 tranform transition-all easy-in-out rounded-xl duration-300'>
            <h2>{name}</h2>
            <div className='flex justify-between'>
                <div className='flex'>
                  {starsGenerator(rating)}
                </div>
                <span>₹{price}</span>
            </div>
           <LinkButton to={'/product'} text="vishal is back"/>
        </div>
    </div>
  )
}

export default Productcard;


