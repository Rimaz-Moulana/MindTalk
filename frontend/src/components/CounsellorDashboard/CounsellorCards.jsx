import React from 'react';
import { FaPercent } from 'react-icons/fa';


const CounsellorCards = () => {
    const completed = 70;
    const cancelled = 38;
    const pending = 11;
    const newUsers = 10;

    return (
        <>
            {/* Card 1 */}
            <div className="flex-1">
                <div className="group bg-white rounded-xl shadow-md hover:border-blue-700 border shadow-md  overflow-hidden text-center p-5 h-50 flex flex-col justify-between cursor-pointer items-center">
                    <div className="flex flex-col items-start justify-start w-full h-full">
                        <div className="flex icon-container relative bg-gray-100 rounded-full h-24 w-24 flex items-center justify-center group-hover:bg-blue-100">
                            <Circle
                                animate={true}
                                animationDuration="1s"
                                responsive={false}
                                size={100} // Increase the size to 100
                                lineWidth={10}
                                progress={(completed / 100) * 100}
                                progressColor="#3182CE"
                                bgColor="#E2E8F0"
                            >
                                <FaPercent size={50} color="#3182CE" /> {/* Adjust the icon size accordingly */}
                            </Circle>
                        </div>
                        <div className="content mt-auto flex flex-col justify-end group-hover:text-blue-700">
                            <p className="text-m font-bold">Completed</p>
                            <p className="text-m font-bold">Sessions</p>
                        </div>
                        <div className="content mt-auto flex flex-col justify-end group-hover:text-blue-700 text-right w-full">
                        <p className="text-xs">Last 30 days</p>
                    </div>
                    </div>
                </div>
            </div>



            {/* Card 2 */}

            <div className="flex-1">
                <div className="group bg-white rounded-xl shadow-md hover:border-blue-500 border shadow-md  overflow-hidden text-center p-5 h-50 flex flex-col justify-between cursor-pointer items-center">
                    <div className="flex flex-col items-start justify-start w-full h-full">
                        <div className="flex icon-container relative bg-gray-100 rounded-full h-24 w-24 flex items-center justify-center group-hover:bg-blue-100">
                            <Circle
                                animate={true}
                                animationDuration="1s"
                                responsive={false}
                                size={100} // Increase the size to 100
                                lineWidth={10}
                                progress={(cancelled / 100) * 100}
                                progressColor="#3182CE"
                                bgColor="#E2E8F0"
                            >
                                <FaPercent size={50} color="#3182CE" /> {/* Adjust the icon size accordingly */}
                            </Circle>
                        </div>
                        <div className="content mt-auto flex flex-col justify-end group-hover:text-blue-700">
                            <p className="text-m font-bold">Cancelled</p>
                            <p className="text-m font-bold">Sessions</p>
                        </div>
                        <div className="content mt-auto flex flex-col justify-end group-hover:text-blue-700 text-right w-full">
                        <p className="text-xs">Last 30 days</p>
                    </div>
                    </div>
                </div>
            </div>


            {/* Card 3 */}
            <div className="flex-1">
                <div className="group bg-white rounded-xl shadow-md hover:border-blue-500 border shadow-md  overflow-hidden text-center p-5 h-50 flex flex-col justify-between cursor-pointer items-center">
                    <div className="flex flex-col items-start justify-start w-full h-full">
                        <div className="flex icon-container relative bg-gray-100 rounded-full h-24 w-24 flex items-center justify-center group-hover:bg-blue-100">
                            <Circle
                                animate={true}
                                animationDuration="1s"
                                responsive={false}
                                size={100}
                                lineWidth={10}
                                progress={(pending / 100) * 100}
                                progressColor="#3182CE"
                                bgColor="#E2E8F0"
                            >
                                <FaPercent size={50} color="#3182CE" />
                            </Circle>
                        </div>
                        <div className="content mt-auto flex flex-col justify-end group-hover:text-blue-700">
                            <p className="text-m font-bold">Pending</p>
                            <p className="text-m font-bold">Sessions</p>
                        </div>
                    </div>
                    <div className="content mt-auto flex flex-col justify-end group-hover:text-blue-700 text-right w-full">
                        <p className="text-xs">Last 30 days</p>
                    </div>
                </div>
            </div>



        </>
    );
};

export default CounsellorCards;
