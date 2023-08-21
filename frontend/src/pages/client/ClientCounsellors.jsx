import { useEffect, useState } from 'react';
import ContactCards from '../../components/ContactCards';
import axios from 'axios';


const Contacts = () => {
  const [isLoading, setLoading] = useState(true);
  const [counselors, setCounselors] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [filterQuery, setFilterQuery] = useState(null);

  //useEffect(() => {
  const fetchCounselors = async () => {
    try {
      const authData = localStorage.getItem('authData')
      if (authData) {
        const { accessToken } = JSON.parse(authData)
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
        const response = await axios.get('http://localhost:8080/api/counsellor/details/getCounsellor', config);

        const fetchedCounselors = response.data.map(counsellor => ({
          id: counsellor.id,
          name: `${counsellor.firstname} ${counsellor.lastname}`
        }))

        setCounselors(fetchedCounselors);
        setContactList(fetchedCounselors);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching counselors:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounselors()
  }, [])

  useEffect(() => {
    if (filterQuery) {
      const queryString = filterQuery.toLowerCase();
      const filteredData = counselors?.filter(contact => {
        const fullName = `${contact.firstname} ${contact.lastname}`;

        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase();
          return firstLetter === queryString;
        } else {
          return fullName.toLowerCase().includes(queryString);
        }
      });
      setContactList(filteredData);
    } else {
      setContactList(counselors?.slice(0, 10));
    }
  }, [counselors, filterQuery]);

  return (
    <div className='rounded-xl'>
      <section className='md:flex gap-5 sm:gap-y-5'>

        {/* <form>
          <input 
            type="text" 
            placeholder="Search..." 
            name="search"
            className='rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 max-sm:text-sm sm:leading-6'
            onChange={event => setFilterQuery(event.target.value)}
            />
        </form> */}

        {/* <form>
          <select className='block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 max-sm:text-sm sm:leading-6'>
            <option disabled selected>Speciality</option>
            <option value="Marriage and family">Marriage and family</option>
            <option value="Career">Career</option>
            <option value="Rehabilitation">Rehabilitation</option>
            <option value="Mental health">Mental health</option>
            <option value="Substance abuse">Substance abuse</option>
            <option value="Educational">Educational</option>
          </select>
        </form> */}

        {/* <form>
          <select className='block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 max-sm:text-sm sm:leading-6'>
            <option disabled selected>Price Range</option>
            <option value="Free" >Free</option>
            <option value="1000">1000-1999</option>
            <option value="2000">2000-2999</option>
            <option value="3000">3000-3999</option>
          </select>
        </form> */}

      </section>

      { <section className='pt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {/* {contactList?.length < 1 && (
          <h1>No Data Matches Your Search</h1>
        )}
        {isLoading && (
          <h1>Still Loading</h1>
        )}
        {error && (
          <h1>Error!</h1>
        )} */}
        <ContactCards contactList={contactList}/>
      </section> }

    </div>
  );
}


export default Contacts;
