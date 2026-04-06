import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";

function Signup() {

  const [enable, setEnable] = useState(false)
  const navigate=useNavigate()


  const handalSubmit = async (e) => {
    e.preventDefault();
    const { email, name, phone, password } = e.target.elements;
    if (email.value.trim() === "" || name.value.trim() === ""
      || phone.value.trim() === "" ||
      password.value.trim() === ""
    )
      toast.error("please fill up the fields", {
        unstyled: true,
        classNames: {
          error: 'bg-red-400',
          description: "text-black-900",

        },
      });

          try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/signup",
        {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          password: e.target.password.value
        }
      );
 const data=await res.data;
      toast.success(data.message);

      navigate("/login");  // 👈 NOT useNavigate()
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    }

      // try {
      //   const res=await axios.post(import.meta.env.VITE_API_URL + "/signup",{
      //     name:name.value,
      //     email:email.value,
      //     phone:phone.value,
      //     password:password.value
      //   })

      //   const data=await res.data;
      //   toast({
      //     title:data.message
      //   });

      //   navigate("/login")
        
      // } catch (error) {
      //   toast.error(error.data.response.message)
        
      // }

  }
  return (
    <>
      <div className="w-[60vw] lg:w-[25vw] mx-auto my-10 grid gap-3">
        <h1 className="text-2xl font-bold">Register Your Account</h1>
        <form className="grid gap-3" onSubmit={handalSubmit}>
          <Input placeholder="Enter your Name" type="text" name="name" />
          <Input placeholder="Enter your Email" type="email" name="email" />
          <Input placeholder="Enter your Phone" type="tel" name="phone" />
          <Input
            placeholder="Enter your Password"
            type="password"
            name="password"
          />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" onCheckedChange={(e) => setEnable(e)} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
            peer-disabled:opacity-70
            "
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          <Button disabled={!enable}>Sign up</Button>
          <div className="flex gap-2 items-center">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
            peer-disabled:opacity-70
            "
            >
              Already have an account ?
            </label>
            <Link to={"/login"}>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
            peer-disabled:opacity-70 cursor-pointer
            "
              >
                Login
              </label>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;










    // try {
    //   const res = await axios.post(
    //     import.meta.env.VITE_API_URL + "/signup",
    //     {
    //       name: e.target.name.value,
    //       email: e.target.email.value,
    //       phone: e.target.phone.value,
    //       password: e.target.password.value
    //     }
    //   );

    //   toast.success(res.data.message);

    //   navigate("/login");  // 👈 NOT useNavigate()
    // } catch (error) {
    //   toast.error(
    //     error?.response?.data?.message || "Something went wrong"
    //   );
    // }
  
