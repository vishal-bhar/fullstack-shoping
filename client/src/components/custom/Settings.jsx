import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import useErrorLogout from '@/hooks/use-error-logout'
import { toast } from 'react-toastify';
import axios from 'axios';

function Settings() {
  
  const { handleErrorLogout } = useErrorLogout();

  const changeUserName = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const previousUserName = formData.get("previousUsername");
    const newUsername = formData.get("newUsername");

    if (!previousUserName) {
       console.log("Validation working");
      toast.error("Error Notification!", {
        position: "top-right",
        autoClose: 5000,
        
      }
    );
      return;
    };

    try {
      const res =await axios.put(import.meta.env.VITE_API_URL + "/change-username", {
        previousUserName,
        newUsername
      },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        }
      );
      const data =await res.data;
      localStorage.setItem("user",JSON.stringify(data.user));
      e.target.reset();
      toast.success("success")
      toast.success(data.message)

     } catch (error) {
      return handleErrorLogout(error)
     };

   };


  const changePassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const previousPassword = formData.get("previousPassword");
    const newPassword = formData.get("newPassword");

    if (!previousPassword || !newPassword) {
      toast.error("previous and new password is required!", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    };

    try {
      const res =await axios.put(import.meta.env.VITE_API_URL + "/change-password", {
        username:JSON.parse(localStorage.getItem("user").username),
        previousPassword,
        newPassword
      },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        }
      );
      const data =await res.data;
      localStorage.setItem("user",JSON.stringify(data.user));
      e.target.reset();
      toast.success("success")
      toast.success(data.message)

     } catch (error) {
      return handleErrorLogout(error)
     };

   };
    
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-3 w-screen sm:w-[80vw] sm:justify-start'>
      {/* Change Username */}
      <div>
        <h2 className='text-2xl font-bold mb-3'>Change Username</h2>
        <form className='grid gap-3 w-[80vw] sm:w-[30vw]' onSubmit={changeUserName}>
          <Input type="text" placeholder="Enter previous Username" name="previousUsername" />
          <Input type="text" placeholder="Enter new Username" name="newUsername" />
          <Button type="submit">Change Username</Button>
        </form>
      </div>
      {/* Change Password */}
      <div>
        <h2 className='text-2xl font-bold mb-3'>Change Password</h2>
        <form className='grid gap-3 w-[80vw] sm:w-[30vw]' onSubmit={changePassword}>
          <Input type="text" placeholder="Enter previous Password" name="previousPassword" />
          <Input type="text" placeholder="Enter new Password" name="newPassword" />
          <Button type="submit">Change Password</Button>
        </form>
      </div>
    </div>
  )
}

export default Settings