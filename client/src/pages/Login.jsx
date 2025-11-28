import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
   <>
   <div className="w-[60vw] lg:w-[25vw] mx-auto my-32 grid gap-3">
      <h1 className="text-2xl font-bold">Login in to Your Account</h1>
      <form className="grid gap-3">
        <Input placeholder="Enter your Email" type="email" name="email" />
        <Input
          placeholder="Enter your Password"
          type="password"
          name="password"
        />
    
        <Button>Sign up</Button>
        <div className="flex gap-2 items-center">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
            peer-disabled:opacity-70
            "
          >
          Dont't have an account ?
          </label>
          <Link to={"/signup"}>
           <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
            peer-disabled:opacity-70 cursor-pointer
            "
          >
            Sign Up
          </label>
          </Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login