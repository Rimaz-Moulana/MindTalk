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
    <div className='rounded-xl'>
      <section className='md:flex gap-5 sm:gap-y-5'>

        <form>
          <input 
            type="text" 
            placeholder="Search..." 
            name="search"
            className='block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 max-sm:text-sm sm:leading-6'
            onChange={event => setFilterQuery(event.target.value)}
            />
        </form>

        <form>
          <select className='block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 max-sm:text-sm sm:leading-6'>
            <option disabled selected>District</option>
            <option value="Colombo" >Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kandy">Kandy</option>
            <option value="Matale">Matale</option>
            <option value="Nuwara Eliya">Nuwara Eliya</option>
            <option value="Galle">Galle</option>
            <option value="Matara">Matara</option>
            <option value="Hambantota">Hambantota</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Kilinochchi">Kilinochchi</option>
            <option value="Mannar">Mannar</option>
            <option value="Vavuniya">Vavuniya</option>
            <option value="Mullaitivu">Mullaitivu</option>
            <option value="Batticaloa">Batticaloa</option>
            <option value="Ampara">Ampara</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Polonnaruwa">Polonnaruwa</option>
            <option value="Badulla">Badulla</option>
            <option value="Moneragala">Moneragala</option>
            <option value="Ratnapura">Ratnapura</option>
            <option value="Kegalle">Kegalle</option>
          </select>
        </form>

        <form>
          <select className='block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 max-sm:text-sm sm:leading-6'>
            <option disabled selected>Speciality</option>
            <option value="Marriage and family">Marriage and family</option>
            <option value="Career">Career</option>
            <option value="Rehabilitation">Rehabilitation</option>
            <option value="Mental health">Mental health</option>
            <option value="Substance abuse">Substance abuse</option>
            <option value="Educational">Educational</option>
          </select>
        </form>

      </section>

      <section className='pt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
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
