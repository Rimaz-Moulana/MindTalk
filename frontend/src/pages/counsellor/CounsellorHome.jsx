import React from 'react';

import CounsellorHead from '../../components/CounsellorDashboard/CounsellorHead';
import CounsellorCards from '../../components/CounsellorDashboard/CounsellorCards';
import CounsellorAppoinments from '../../components/CounsellorDashboard/CounsellorAppoinments';
import CounsellorTest from '../../components/CounsellorDashboard/CounsellorTest';
import CounsellorCalender from '../../components/CounsellorDashboard/CounsellorCalender';
import CounsellorGraph from '../../components/CounsellorDashboard/CounsellorGraph';

const CounsellorHome = () => {
    return (
        <>
            <div className="flex flex-col gap-4 w-full">
                
                <div className="flex flex-wrap gap-4">
                   
                </div>
                
                <div className="flex flex-col gap-4 w-full">
                    <CounsellorAppoinments />
                </div>
       
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-wrap w-full">
                        <div className="flex-1 max-w-md">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-full mr-4">
                                <CounsellorTest />
                            </div>
                        </div>

                        <div className="flex-1 max-w-full">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5">
                                <CounsellorCalender />
                            </div>
                        </div>
                    </div>
                </div>
         
                <div className="flex flex-col gap-4 w-full">
                    <CounsellorGraph />
                </div>
            </div>
        </>
    );
};

export default CounsellorHome;
