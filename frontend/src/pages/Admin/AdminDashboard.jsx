import React from 'react'
import AdminCards from '../../components/AdminDashboard/AdminCards';
import AdminTestGraph from '../../components/AdminDashboard/AdminTestGraph';
import BarChart from '../../components/AdminDashboard/BarChart';

const AdminDashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-wrap gap-4">
        <AdminCards />
        </div>
      

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-wrap w-full">
          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-full mr-4">
            <AdminTestGraph />
            </div>
          </div>

          <div className="flex-1 max-w-full">
            <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-full">
           <BarChart />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};



export default AdminDashboard
