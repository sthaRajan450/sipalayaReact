import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import authService from "../appwrite/auth";
import { Button, Input, Logo } from "../components/index";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full ">
          <div className="m-auto w-full  max-w-lg  bg-gray-100 rounded-xl p-10 border  border-black/10">
            <div className="mb-2  flex justify-center">
              <span className=" inline-block  w-full  max-w-[100px]">
                <Logo width="100%" />
              </span>
            </div>
            <h1 className="text-2xl text-center font-bold leading-tight">
              Sign up to create account
            </h1>
            <p className="mt-2 text-center text-base text-black/60">
             Alread have an account &nbsp;
              <Link
                to="/login"
                className=" font-medium text-primary transition-all duration-200  hover:underline"
              >
                Sign In
              </Link>
            </p>
            {error && <p className="text-red-600 mt-8  text-center">{error}</p>}
    
            <form onSubmit={handleSubmit(signup)} className="mt-8">
              <div className="space-y-5">
                <Input label='Name' placeholder='Enter your full name' type='text' {...register('name',{required:true})}/>
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email",{required:true})}
                />
    
                <Input label='Password' placeholder='Enter your password' type='password' {...register('password',{required:true})}/>
                <Button type='submit' className='w-full'>Create Account</Button>
              </div>
            </form>
          </div>
        </div>
  )
};

export default SignUp;
