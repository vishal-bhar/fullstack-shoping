import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Success() {
    const [count,setCount]=useState(3)

    useEffect(()=>{
 const redirecting=setInterval(()=>{
    setCount((prev)=>prev -1)
 },1000);

 return ()=>{
    clearInterval(redirecting)
 }
    },[])

    setTimeout(()=>{
        window.location.href="/"
    },3000)

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h1 className='text-3xl sm:text-4xl font-bold'>Payment Successfull</h1>
      <Link to={"/"} className='text-xs sm:text-base'>Go home page (Redirecting in {count} seconds)</Link>

    </div>
  )
}

export default Success