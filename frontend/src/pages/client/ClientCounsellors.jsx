import { useEffect, useState } from 'react';
import ContactCards from '../../components/ContactCards'
import useFetch from 'react-fetch-hook';

const Contacts = () => {

  const url = 'https://randomuser.me/api/?results=200'
  const { isLoading, data, error } = useFetch( url )
  const [contactList, setContactList] = useState (null)
  const [filterQuery, setFilterQuery] = useState (null)

  useEffect( () => {
    if(filterQuery) {
      const queryString = filterQuery.toLowerCase()
      const filteredData = data?.results?.filter(contact => {
        const fullName = `${contact.name.first} ${contact.name.last} `
        
        if (queryString.length === 1 ) {
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString
        }
        else {
          return fullName.toLowerCase().includes(queryString)
        }

      })
      setContactList(filteredData)
    }
    else{
      setContactList(data?.results?.slice(0,10))
    }
  }, [data, filterQuery])

  return (
    <div className='bg-gray-100'>
      <section>
        <form>
          <input 
            type="text" 
            placeholder="Search..." 
            name="search"
            className='ml-5 mt-6 rounded-md p-2'
            onChange={event => setFilterQuery(event.target.value)}
            />
        </form>
      </section>
      <section className='p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {contactList?.length < 1 && (
          <h1>No Data Matches Your Search</h1>
        )}
        {isLoading && (
          <h1>Still Loading</h1>
        )}
        {error && (
          <h1>Error!</h1>
        )}
        <ContactCards contactList={contactList}/>
      </section>
    </div>
  );
}

export default Contacts;
