import React from 'react';

import CounsellorAppoinments from '../../components/CounsellorDashboard/CounsellorAppoinments';
import CounsellorCalender from '../../components/CounsellorDashboard/CounsellorCalender';
import CounsellorGraph from '../../components/CounsellorDashboard/CounsellorGraph';
import CounsellorTest from '../../components/CounsellorDashboard/CounsellorTest';
import Users from '../../components/Users';
import CounsellorTherapy from './CounsellorTherapySession';

const CounsellorHome = () => {
    return (
        <>
            <div className="flex flex-col gap-4 w-full">
                
                <div className="flex flex-wrap gap-4">
                   <Users />
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
         
                {/* <div className="flex flex-col gap-4 w-full">
                    <CounsellorGraph />
                </div> */}
                <div className="flex flex-col gap-4 w-full">
                    <CounsellorTherapy />
                </div>
            </div>
        </>
    );
};

export default CounsellorHome;
