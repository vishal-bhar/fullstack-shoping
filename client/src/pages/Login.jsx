import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserLogin } from '@/redux/slices/authSlice.js'

function Login() {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handalSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (email.value.trim() === "" || password.value.trim() === "") {
      return toast.error("Please fill all the fields")
    }

      try {
        const res = await axios.post(import.meta.env.VITE_API_URL + "/login", {
          email: email.value,
          password:password.value
        });

        console.log(res)

        const data= await res.data;

        dispatch(setUserLogin(data))

        toast.success(data.message)

         navigate("/")

      } catch (error) {
        console.log(error)
    toast.error(error.response.data.message)

      }
    

  }

  return (
    <>
      <div className="w-[60vw] lg:w-[25vw] mx-auto my-32 grid gap-3">
        <h1 className="text-2xl font-bold">Login in to Your Account</h1>
        <form className="grid gap-3" onSubmit={handalSubmit}>
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