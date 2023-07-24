import React from 'react'
import { WALLET_SIDEBAR_LINKS } from '../../lib/consts/WalletNavigation';
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { useState } from "react";
import logo from '../../assets/logo.png'


const linkClasses = 'flex items-center gap-2 px-3 py-2 hover:bg-blue-400 hover:no-underline active:bg-blue-700 rounded-md text-lg'

export default function WalletSidebar() {
  const [open, setOpen] = useState(true);

  const toggleWalletSidebar = () => {
    setOpen(!open);
  };
  

  return (
    <div className="flex max-sm:toggleSidebar">
      <div className={`bg-white h-screen p-5 pt-1 flex flex-col text-white overflow-hidden ${open ? "w-72" : "w-20"} duration-300 relative `}>

        <div className='inline-flex items-center gap-2 px-1 py-3'>
          <img
                src={logo}
                alt="Logo"
                className={`rounded-full cursor-pointer block float-left mr-2 w-10
                duration-500 ${open && "rotate-[360deg]"}`}
                onClick={toggleWalletSidebar}
          />
          <h1 className={`text-blue-900 origin-left font-bold text-2xl cursor-pointer duration-300 ${!open && "scale-0"}`} onClick={toggleWalletSidebar} >
            MindTalk
          </h1>
        </div>

        <div className='flex-1 flex flex-col py-10 mt-10 justify-center overflow-hidden '>
          <div className='flex-1 flex flex-col py-10 mt-10 gap-2 overflow-hidden '>
              {WALLET_SIDEBAR_LINKS.map((item) => (
                <WalletSidebarLink key={item.key} item={item} isOpen={open}/>
              ))}
          </div>

          <div className={`flex flex-col gap-0.5 pt-2 border-t border-neutral-300 ${!open && "scale-0"} overflow-hidden`}>
            <span className='text-neutral-400 text-center overflow-hidden'>MindTalk</span>
          </div>

        </div>
      </div>
    </div>
  )
}

function WalletSidebarLink({ item, isOpen }){

  const {pathname} = useLocation()

  return(
    <Link to={item.path} className={classNames( pathname === item.path ? ' bg-blue-700 text-white' : 'text-neutral-500',linkClasses)} >
      <span className='text-xl'>{item.icon}</span>
      <span className={`text-base font-medium flex-1 duration-200`}>{isOpen && item.label}</span>
    </Link>
  )
}