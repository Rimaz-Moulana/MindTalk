import React, { useState } from 'react';
import AddUser from '../../components/AdminDashboard/AddUser';
import UpdateUser from '../../components/AdminDashboard/UpdateUser';

const UserHandle = () => {
  const [activeSection, setActiveSection] = useState('add'); // 'add', 'view', 'update', 'delete'

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'add':
        return <div><AddUser /></div>;
      case 'view':
        return <div>Content for View User section</div>;
      case 'update':
        return <div><UpdateUser /></div>;
      case 'delete':
        return <div>Content for Delete User section</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">

      <div className="flex flex-wrap gap-4">
        <div
          className={`cursor-pointer flex-1 p-2 rounded-lg text-center ${
            activeSection === 'add' ? 'bg-blue-700 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleSectionClick('add')}
        >
          Add User
        </div>
        <div
          className={`cursor-pointer flex-1 p-2 rounded-lg text-center ${
            activeSection === 'view' ? 'bg-blue-700 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleSectionClick('view')}
        >
          View User
        </div>
        <div
          className={`cursor-pointer flex-1 p-2 rounded-lg text-center ${
            activeSection === 'update' ? 'bg-blue-700 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleSectionClick('update')}
        >
          Update User
        </div>
        <div
          className={`cursor-pointer flex-1 p-2 rounded-lg text-center ${
            activeSection === 'delete' ? 'bg-blue-700 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleSectionClick('delete')}
        >
          Delete User
        </div>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center w-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserHandle;
