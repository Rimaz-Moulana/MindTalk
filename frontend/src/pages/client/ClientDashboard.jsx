import React, { useContext, useEffect, useState } from 'react';
import ClientCalender from '../../components/ClientDashboard/ClientCalender';
import ClientHead from '../../components/ClientDashboard/ClientHead';
import ClientHistory from '../../components/ClientDashboard/ClientHistory';
import ClientdashCards from '../../components/ClientDashboard/ClientdashCards';
import AuthContext from '../../context/AuthProvider';
import ClientTherapySessionSuggestion from './ClientTherapySessionSuggestion';

const ClientDashboard = () => {
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  
  // console.log('Auth Data:', auth);

  // console.log("Username:", auth.username);

  useEffect(() => {
    // Retrieve username from local storage
    const storedAuthData = localStorage.getItem("authData");
    if (storedAuthData) {
      const { username } = JSON.parse(storedAuthData);
      setUsername(username);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      <ClientHead username={username || auth.username} />
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
      <div className="flex flex-wrap gap-4">
        <ClientTherapySessionSuggestion />
      </div>
    </div>
  );
};

export default ClientDashboard;
