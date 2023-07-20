
import GOOGLE_ICON from '../assets/google.svg';
import LOGIN from '../assets/login.jpg';
import LOGO from '../assets/Logo Dark.svg';
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line no-unused-vars
const colors = {
  primarty : "#060606",
  background: "#E0E0E0",
  display: "#090909"
}
export default function Login() {
  return (
    <div className='w-full h-screen flex items-start'>
    <div className='relative w-full h-full flex flex-col'>
    <div className='absolute top-[25%] left-[10%] flex flex-col'>
    

    <h1 className='text-2xl text-black font-extrabold my-4'>Turn to Peace</h1>
    <p className='text-base text-black font-semibold'>start for free and get attarctive offer from the community.</p>
    </div>
      <img src={LOGIN} className='w-full h-full object-cover' />
    </div>
     <div className='w-3/4 h-full bg-[#f3f3f3] flex flex-col p-20 justify-between  items-center'>
     <h2 className='text-xl font-semibold text-[#060606]'>MindTalk</h2><img className='w-[50px] h-[50px] rounded-full' src={LOGO}/>
     

    <div className='w-full flex flex-col max-w-[400px]'>
    <div className='w-full flex flex-col mb-2'>
    <h3 className='text-3xl font-semibold mb-4'>Login</h3>
    <p className='tex-base mb-2'>Welcome to MindTalk, Please enter your details</p>
    </div>
    <div className='w-full flex flex-col'>
    <input
    type='email'
    placeholder='Email'
    className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

    <input
    type='password'
    placeholder='Password'
    className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
    
    </div>
<div className='w-full flex items-center justify-between'>
<div className='w-full flex'>
<input type='checkbox' className='w-4 h-4 mr-2' />
<p className='text-sm'>Remember Me 30 days</p>
</div>
<p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-effect-2'>Forgot Password</p>
</div>

<div className='w-full flex flex-col my-4'>
<button className='w-full text-white my-2 bg-[#060606] hover:bg-[#4d4d4d] rounded-md p-4 text-center flex items-center justify-center'>
  Login 
</button>
<button className='w-full text-black  my-2 border-2 hover:bg-[#f7f7f7] border-black bg-[white] rounded-md p-4 text-center flex items-center justify-center'>
    Register
</button>
</div>

<div className='w-full flex items-center justify-center relative py-2'>
<div className='w-full h-[1px] bg-black/40'></div>
<p className='text-lg absolute text-black-50 bg-[#E0E0E0]'>or</p>
</div>
 <button className='w-full text-black  my-2 border-2 border-black/40 hover:bg-[#f7f7f7] bg-[white] rounded-md p-4 text-center flex items-center justify-center'>
 <img src={GOOGLE_ICON} className='w-[25px] h-[25px] mr-2' />
    Sign in with google
</button>
    </div>
    <div className='w-full flex items-center justify-center'>
    <p className='text-sm font-normal text-[#0606006]'>Dont have a account?<span className='font-semibold underline underline-effect-2 cursor-pointer'>Sign up for free</span> </p>
    </div>
   
     </div>
    </div>
  )
}
