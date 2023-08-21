import React from 'react'
import { FiDollarSign, FiPocket, FiHome, FiUserPlus, FiUsers } from 'react-icons/fi'

const AdminCards = () => {
    return (
        <>
            <div className="flex-1">
                <div className="group bg-white rounded-xl shadow-md hover:border-blue-500 border shadow-md  overflow-hidden text-center p-5 h-40 flex flex-col justify-between cursor-pointer items-center">
                    <div className="flex icon-container relative bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center group-hover:bg-blue-100">
                        <FiUsers className="icon text-3xl group-hover:text-blue-700"></FiUsers>
                    </div>
                    <div className="content mt-4 flex flex-col justify-end group-hover:text-blue-700 ">
                        <p className="text-s">Total Counsellors</p>
                        <p className="font-bold text-2xl ">20</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="group bg-white rounded-xl shadow-md hover:border-blue-500 border shadow-md overflow-hidden text-center p-5 h-40 flex flex-col justify-between cursor-pointer items-center">
                    <div className="flex bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center icon-container relative group-hover:bg-blue-100">
                        <FiUsers className="icon text-3xl group-hover:text-blue-700"></FiUsers>
                    </div>
                    <div className="content mt-4 flex flex-col justify-end group-hover:text-blue-700">
                        <p className="text-s hover:textColo-blue-500">Total Users</p>
                        <p className="font-bold text-2xl ">200</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="group bg-white rounded-xl shadow-md hover:border-blue-500 border shadow-md overflow-hidden text-center p-5 h-40 flex justify-center flex-col justify-between cursor-pointer items-center">
                    <div className="flex icon-container relative bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center group-hover:bg-blue-100">
                        <FiUsers className="icon text-3xl group-hover:text-blue-700"></FiUsers>
                    </div>
                    <div className="content mt-4 flex flex-col justify-end group-hover:text-blue-700">
                        <p className="text-s">Total Moderators</p>
                        <p className="font-bold text-2xl">03</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="group bg-white rounded-xl shadow-md hover:border-blue-500 border shadow-md overflow-hidden text-center p-5 h-40 flex flex-col justify-between cursor-pointer items-center">
                    <div className="flex bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center icon-container relative group-hover:bg-blue-100">
                        <FiUserPlus className="icon text-3xl group-hover:text-blue-700"></FiUserPlus>
                    </div>
                    <div className="content mt-4 flex flex-col justify-end group-hover:text-blue-700">
                        <p className="text-s">New Users</p>
                        <p className="font-bold text-2xl">10</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminCards
