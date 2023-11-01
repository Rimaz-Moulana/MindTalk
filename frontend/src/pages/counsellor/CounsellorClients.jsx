import React, { useEffect, useState } from 'react';
import ClientCards from '../../components/ClientCards';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import RegisterClient from './CounsellorRegisterClient';
import axios from 'axios';

const Clients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clients,setClients] = useState([]);
  const [clientList, setClientList] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  const [isLoading, setLoading] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchClientData = async (counsellorId) => {
    try {
      console.log("Fetching clients...");
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        };
        const response = await axios.get(
          `http://localhost:8080/api/client/appointment/get-clientInfo/${counsellorId}`, 
          config
        );

        const fetchedClients = response.data.map(client => ({
          id: client.userId,
          name: `${client.fname} ${client.lname}`,
          profilePhotoPath: client.profilePhotoPath
        }))
        
        setClients(fetchedClients);
        setClientList(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const authData = localStorage.getItem('authData');
    if (authData) {
      const { id } = JSON.parse(authData);
      console.log("counsellor id", id)
      fetchClientData(id); // Call fetchClientData with the retrieved id
    }
  }, []);

  // useEffect(() => {
  //   fetchClientData();
  // }, []);

  useEffect(() => {
    if (filterQuery) {
      const queryString = filterQuery.toLowerCase();
      const filteredData = clientList.filter(client => {
        const fullName = `${client.fname} ${client.lname}`;

        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase();
          return firstLetter === queryString;
        } else {
          return fullName.toLowerCase().includes(queryString);
        }
      });
      setClientList(filteredData);
    }
  }, [filterQuery, clientList]);

  return (
    <div className='bg-gray-100'>
      <section>
        <div className='sm:flex sm:flex-row sm:w-full'>
          <div className='flex-grow'>
            <form className='flex'>
              <input
                type='text'
                placeholder='Search...'
                name='search'
                className='p-2 mt-6 ml-5 rounded-md'
                onChange={(event) => setFilterQuery(event.target.value)}
              />
            </form>
          </div>
          <div className='ml-auto'>
            <button
              onClick={openModal}
              className='p-2 mt-6 ml-5 sm:mr-5 text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black'
            >
              Add Client
            </button>
            <ReactModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel='Add Client Modal'
              className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full modal'
              overlayClassName='overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'
            >
              <RegisterClient closeModal={closeModal} />
            </ReactModal>
          </div>
        </div>
      </section>

      <section className='p-5'>
        {clientList?.length < 1 && <h1>No Data Matches Your Search</h1>}
        <ClientCards clientList={clientList} />
      </section>
    </div>
  );
};

export default Clients;
