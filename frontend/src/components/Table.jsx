import React from 'react'
import { Link } from 'react-router-dom'

export default function Table() {
  return (
        <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                <thead
                    className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <tr>
                    <th scope="col" className="px-6 py-4">Username</th>
                    <th scope="col" className="px-6 py-4">User Type</th>
                    <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-gray-400 hover:dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Andi Lane</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">andi@example.com</p>
                            </div>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Professional Counselor</td>
                    <td className="whitespace-nowrap px-6 py-4">
                        <Link className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" >Edit</Link>
                        <Link className='border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline'>Info</Link>
                        <Link className='border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'>Delete</Link>
                    </td>
                    
                    </tr>
                    <tr
                    className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                     <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Sendhil Kumar</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">andi@example.com</p>
                            </div>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Moderator</td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <Link className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" >Edit</Link>
                        <Link className='border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline'>Info</Link>
                        <Link className='border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'>Delete</Link>
                    </td>
                    </tr>
                    <tr
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Andi Lane</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">andi@example.com</p>
                            </div>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Volunteer Counselor</td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <Link className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" >Edit</Link>
                        <Link className='border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline'>Info</Link>
                        <Link className='border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'>Delete</Link>
                    </td>
                    </tr>
                    <tr
                    className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Andi Lane</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">andi@example.com</p>
                            </div>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Volunteer Counselor</td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <Link className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" >Edit</Link>
                        <Link className='border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline'>Info</Link>
                        <Link className='border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'>Delete</Link>
                    </td>
                    </tr>
                    <tr
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Andi Lane</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">andi@example.com</p>
                            </div>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Volunteer Counselor</td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <Link className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" >Edit</Link>
                        <Link className='border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline'>Info</Link>
                        <Link className='border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'>Delete</Link>
                    </td>
                    </tr>
                    <tr
                    className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Andi Lane</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">andi@example.com</p>
                            </div>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Volunteer Counselor</td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <Link className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" >Edit</Link>
                        <Link className='border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline'>Info</Link>
                        <Link className='border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'>Delete</Link>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
  )
}
