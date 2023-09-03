import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

export default function ModeratorButton() {
    const [setModal, setModalOpen] = useState(false);

    const [detailsData, setDetailsData] = useState([]);
    
    return (
        <>
            <button
                type="button"
                className="flex items-center rounded bg-white border border-blue-500 px-2 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-blue-500 hover:bg-primary-600 "
                onClick={() => setModalOpen(true)}
            >
                <FiCheck className="mr-1" />
                See info...
            </button>

            {setModal ? (
                <>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setModal(false)}
                        ></div>
                        <div className="flex items-center h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    {/* <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-red-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg> 
                                    </div> */}
                                    <div className="mt-2 justify-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Couselllor Details
                                        </h4>
                                        {/* <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p> */}
                            
                                        <div className=''>
                                        <label>First Name: {detailsData.map((entry) => {entry.firstName}) }</label>
                                        <div className=""> 
                                        <label>Lasst Name: {detailsData.map((entry) => {entry.lastName}) }</label>
                                        </div>
                                        <div className=""> 
                                        <label>Email: {detailsData.map((entry) => {entry.email}) }</label>
                                        </div>
                                        <div className=''>
                                        <label>lisence Number: {detailsData.map((entry) => {entry.lisenceNo}) }</label>
                                        </div>
                                        <div className=''>
                                        <label>lisence Image: {detailsData.map((entry) => {entry.lisenceImage}) }</label>
                                        </div>

                                        </div>
                                        <div className="items-center w-[100px] gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setModalOpen(false)
                                                }
                                            >
                                                Accept
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setModalOpen(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ):null}
        </>
    )
}

