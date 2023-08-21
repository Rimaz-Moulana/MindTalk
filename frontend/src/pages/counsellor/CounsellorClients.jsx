import { useEffect, useState } from 'react';
import ClientCards from '../../components/ClientCards';
import { Link } from 'react-router-dom';
import { img1 } from '../../assets';
import { img2 } from '../../assets';
import { img3 } from '../../assets';

const Clients = () => {
  const initialClientData = [
    {
      name: {
        first: 'Michelle',
        last: 'Perera'
      },
      picture: {
        medium: img2
      }
    },
    {
      name: {
        first: 'Pathum',
        last: 'Lakshan'
      },
      picture: {
        medium: img3
      }
    },
    {
      name: {
        first: 'Kaveesha',
        last: 'Muthukuda'
      },
      picture: {
        medium: img1
      }
    },
  ];

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
        <div className='flex flex-row w-full flex-auto'>
          <div className='flex-grow'>
            <form className='flex'>
              <input
                type='text'
                placeholder='Search...'
                name='search'
                className='ml-5 mt-6 rounded-md p-2'
                onChange={event => setFilterQuery(event.target.value)}
              />
            </form>
          </div>
          <div className='ml-auto'>
            <Link to={'registerclient'}>
              <button className='bg-blue-700 mt-6 rounded-md p-2 border text-white mr-5 hover:bg-white hover:border-blue-700 hover:text-black'>
                Add Client
              </button>
            </Link>
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
