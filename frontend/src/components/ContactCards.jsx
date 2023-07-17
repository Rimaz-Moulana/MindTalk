import React from 'react'

const ContactCards = ({contactList}) => {

  contactList && console.log(contactList)  

  return (
    <>
      {contactList?.map((contact, index) => (
        <figure key={index} className='bg-white h-80 rounded-lg shadow-md pt-7'>
            <img 
                alt="user"
                className='w-32 h-32 rounded-full mx-auto'
                src={contact.picture.large} 
            />
            <figcaption className='text-center mt-5'>
                <p className='text-gray-700 font-semibold text-xl mb-2'>
                    {contact.name.first} {contact.name.last}
                </p>
                <p className='text-gray-500'>
                    <span className='font-medium'>email:</span> {contact.email}
                </p>
                <p className='text-gray-500'>
                    <span className='font-medium'>phone:</span> {contact.cell} 
                </p>
                <p className='text-gray-500'>
                    <span className='font-medium'>city:</span> {contact.location.city}
                </p>
            </figcaption>
        </figure>
      ))
        
      }
    </>
  )
}

export default ContactCards
