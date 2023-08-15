import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-sky-800 text-white font-poppins font-medium text-[18px] text-primary ${styles} rounded-[10px]`}>
      Get Started
    </button>


  )
}

export default Button