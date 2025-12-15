import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function Settings() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-3 w-screen sm:w-[80vw] sm:justify-start'>
      {/* Change Username */}
    <div>
        <h2 className='text-2xl font-bold mb-3'>Change Username</h2>
      <form className='grid gap-3 w-[80vw] sm:w-[30vw]'>
        <Input type="text" placeholder="Enter previous Username" name="previousUsername"/>
        <Input type="text" placeholder="Enter new Username" name="newUsername"/>
    <Button type="submit">Change Username</Button>
      </form>
    </div>
      {/* Change Password */}
       <div>
        <h2 className='text-2xl font-bold mb-3'>Change Password</h2>
      <form className='grid gap-3 w-[80vw] sm:w-[30vw]'>
        <Input type="text" placeholder="Enter previous Password" name="previousPassword"/>
        <Input type="text" placeholder="Enter new Password" name="newPassword"/>
    <Button type="submit">Change Password</Button>
      </form>
    </div>
    </div>
  )
}

export default Settings