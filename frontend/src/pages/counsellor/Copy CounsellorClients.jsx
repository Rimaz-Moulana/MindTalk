import React, { useEffect, useState } from 'react';
import ClientCards from '../../components/ClientCards';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import RegisterClient from './CounsellorRegisterClient';
import { img1 } from '../../assets';
import { img2 } from '../../assets';
import { img3 } from '../../assets';
import axios from 'axios';

const Clients = () => {
  const initialClientData = [
    {
      name: {
        first: 'Michelle',
        last: 'Perera'
      },
      picture: {
        medium: img1
      }
    },
    {
      name: {
        first: 'Pathum',
        last: 'Lakshan'
      },
      picture: {
        medium: img2
      }
    },
    {
      name: {
        first: 'Kaveesha',
        last: 'Muthukuda'
      },
      picture: {
        medium: img3
      }
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = useState(initialClientData);
  const [clientList, setClientList] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);

  useEffect(() => {
    if (filterQuery) {
      const queryString = filterQuery.toLowerCase();
      const filteredData = data.filter(client => {
        const fullName = `${client.name.first} ${client.name.last}`;

        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase();
          return firstLetter === queryString;
        } else {
          return fullName.toLowerCase().includes(queryString);
        }
      });
      setClientList(filteredData);
    } else {
      setClientList(data.slice(0, 10));
    }
  }, [data, filterQuery]);

  return (
    <div className='bg-gray-100'>
      <section>
        <div className='flex flex-row flex-auto w-full'>
          <div className='flex-grow'>
            <form className='flex'>
              <input
                type='text'
                placeholder='Search...'
                name='search'
                className='p-2 mt-6 ml-5 rounded-md'
                onChange={event => setFilterQuery(event.target.value)}
              />
            </form>
          </div>
          <div className='ml-auto'>
          <button
              onClick={openModal}
              className="p-2 mt-6 mr-5 text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black"
            >
              Add Client
            </button>
            <ReactModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Add Client Modal"
              className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full modal"
              overlayClassName="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
            >
              <RegisterClient closeModal={closeModal} />
            </ReactModal>

          </div>
        </div>
      </section>

      <section className='p-5 '>
        {clientList?.length < 1 && <h1>No Data Matches Your Search</h1>}
        <ClientCards clientList={clientList} />
      </section>
    </div>
  );
};

export default Clients;
