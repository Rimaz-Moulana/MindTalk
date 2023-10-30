import React, { Fragment, useState } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import axios from 'axios';
import dp from '../../assets/dp.png'

const notificationList = [
  'Appointment Reminder 01',
  'Update Your profile Details',
  'Important update available',
];

export default function Header({id}) {
    const [notifications, setNotifications] = useState(notificationList);
    const [user, setUser] = useState(null); // User-related data state 
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        try {
            // Make a request to your logout endpoint
            await axios.post('http://localhost:8080/api/v1/auth/logout', null, {
                withCredentials: true, // Include credentials
            });

            // If logout is successful, navigate to the login page or perform other actions
            navigate('/login');
        } catch (error) {
            console.error("Error during logout:", error);
            // Handle any error that might occur during the logout process
        }
    };
    

  return (
    <div className='top-0 z-50 w-full bg-white'>
        <div className='sm:flex md:flex float-right items-center py-4 pr-2 h-[64px] min-h-[64px]'>
    
            <div className='flex items-center float-right gap-2 mr-2'>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-blue-700 text-white',
                                    'p-1.5 rounded-lg inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <FiBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                                >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className='bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='font-medium text-gray-700'>Notifications</strong>
                                        {notifications.length === 0 ? (
                                            <div className="py-1 mt-2 text-sm text-gray-600">No new notifications</div>
                                        ) : (
                                            <div className="py-1 mt-2 text-sm text-gray-600">
                                            {notifications.map((notification, index) => (
                                                <div 
                                                    className='py-2 transition duration-300 ease-in-out border-b border-gray-200 cursor-pointer hover:bg-neutral-100 '
                                                    key={index}>{notification}</div>
                                            ))}
                                            </div>
                                        )}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="inline-flex ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700">
                            <span className='sr-only'>open user menu</span>
                            <div className='w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full bg-sky-500' >
                                <img src={dp} alt="avatar" className='rounded-full w-18 h-18' />
                                <span className='sr-only'> Hugh jackman</span>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="absolute right-0 z-10 w-48 p-1 mt-2 origin-top-right bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div className={classNames(
                                        active && 'bg-gray-100',
                                        'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate(`/client/clientprofile/${id}`)}>
                                        Your Profile 
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div className={classNames(
                                        active && 'bg-gray-100',
                                        'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={handleLogout} // Call the logout function
                                        >
                                        Logout
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                </Transition>
                </Menu>
            
            </div>

        </div>
    </div>
  )
}