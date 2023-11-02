import React from 'react'

const Button = ({ styles }) => {
  return (
    <a href="/register"><button type="button" className={`py-4 px-6 bg-sky-800 text-white font-poppins font-medium text-[18px] text-primary ${styles} rounded-[10px]`}>
      Get Started
    </button></a>


  )
}

export default Button