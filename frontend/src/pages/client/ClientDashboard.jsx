import React from 'react'
import ClientdashCards from '../../components/ClientDashboard/ClientdashCards'
import ClientHistory from '../../components/ClientDashboard/ClientHistory'
import ClientCalender from '../../components/ClientDashboard/ClientCalender'


const ClientDashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-wrap gap-4">
          <ClientdashCards />
        </div>
      

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-wrap w-full">
          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-full mr-4">
              <ClientHistory />
            </div>
          </div>

          <div className="flex-1 max-w-full">
            <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5">
              <ClientCalender />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};



export default ClientDashboard
