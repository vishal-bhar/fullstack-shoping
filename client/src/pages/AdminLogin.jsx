import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function AdminLogin() {
   return (
   <>
   <div className="w-[60vw] lg:w-[25vw] mx-auto my-32 grid gap-3">
      <h1 className="text-2xl font-bold">Login in to Your Account</h1>
      <form className="grid gap-3">
        <Input placeholder="User name here ... " type="text" name="username" />
        <Input
          placeholder=" Password Here ..."
          type="password"
          name="password"
        />
    
        <Button>Log In</Button>
       
      </form>
    </div>
    </>
  )
}

export default AdminLogin