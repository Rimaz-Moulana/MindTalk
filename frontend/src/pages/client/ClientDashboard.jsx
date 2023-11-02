import React, { useContext, useEffect, useState } from 'react';
import ClientCalender from '../../components/ClientDashboard/ClientCalender';
import ClientHead from '../../components/ClientDashboard/ClientHead';
import StepperWithContent from '../../components/ClientDashboard/StepperWithContent';
import AuthContext from '../../context/AuthProvider';
import ReviewCarousel from './ReviewCarousel';

const ClientDashboard = () => {
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from local storage
    const storedAuthData = localStorage.getItem('authData');
    if (storedAuthData) {
      const { username } = JSON.parse(storedAuthData);
      setUsername(username);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      <ClientHead username={username || auth.username} />
      <div className="flex flex-wrap gap-4">
       
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 max-w-md">
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-full">
            <StepperWithContent />
          </div>
        </div>
        <div className="flex-1 max-w-full">
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5">
            <ClientCalender />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap gap-4"> */}
        {/* <ClientTherapySessionSuggestion /> */}
        {/* <ClientCarousel /> */}
        <ReviewCarousel />
      {/* </div> */}
    </div>
  );
};

export default ClientDashboard;
