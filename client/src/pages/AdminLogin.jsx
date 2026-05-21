import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { setUserLogin } from '@/redux/slices/authSlice';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
  import { toast } from 'react-toastify';



function AdminLogin() {

  const dispatch=useDispatch();
  const navigate=useNavigate();

const handelLogin= async (e)=>{

e.preventDefault();

const username=e.target.username.value.trim();
const password=e.target.password.value.trim();
console.log(username,password)

if(!username || !password){
   toast.error("Please enter username and password");
  return;
};



try {
  const res = await axios.post(import.meta.env.VITE_API_URL + "/admin-login",{username , password},

  ); 
  const data = await res.data;

  dispatch(setUserLogin(data));
  // console.log(data)

  toast.success(data.message);

  navigate("/admin/dashboard");

} catch (error) {
  console.log(error)
  toast.error(error.response.data.message);

};
};

   return (
   <>
   <div className="w-[60vw] lg:w-[25vw] mx-auto my-32 grid gap-3">
      <h1 className="text-2xl font-bold">Login in to Your Account</h1>
      <form className="grid gap-3" onSubmit={handelLogin}>
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