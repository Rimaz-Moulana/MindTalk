import React from 'react'
import img2 from '../../assets/img2.png'
import { FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import avatarPNG from '../../assets/Chat/chatUser.png';

// function ClientProfileCard() {
//   return (
//     <div>

//       <figure className='pt-5 border-b-2'>
//           <img
//             alt="client"
//             className='w-28 h-28 rounded-full mx-auto'
//             src= {img2}
//           />
//           <figcaption className='text-center mt-5 flex-wrap'>
//             <p className='text-gray-700 font-semibold text-xl mb-2'>
//               Michelle Perera
//             </p>
//             <p className='text-gray-700 mb-2'>
//               0712345678
//             </p>
//             <p className='text-gray-700 mb-2'>
//               michelle@gmail.com
//             </p>
//             <p className='text-gray-700 mb-2'>
//               Colombo
//             </p>
//             <div className='ml-auto'>
//             <Link
//               to={'doctors'} >
//               <button className='bg-blue-700 mb-2 rounded-md p-2 border text-white hover:bg-white hover:border-blue-700 hover:text-black'>
//                 Refer Doctors
//               </button>
//             </Link>
//           </div>
//           </figcaption>
//         </figure>

//         <div className="flex flex-col">
//           <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
//             <div className="p-2 inline-block min-w-full">
//               <div className="overflow-hidden ">

//                 <div className='pt-5'>
//                   <span className='font-bold '>Emergency Contacts</span>
//                 </div>

//                 <table className="min-w-full">

//                   <thead className="bg-gray-200 border-b">
//                     <tr>
//                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                         Name
//                       </th>
//                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                         Phone
//                       </th>
//                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>

//                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Udara Nishani
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         0713456789
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
//                         <FiMessageSquare />
//                       </td>
//                     </tr>

//                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Leelaratne Perera
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         0713456123
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
//                         <FiMessageSquare />
//                       </td>
//                     </tr>
                    
//                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         Pathum Lakshan
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         0784569782
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
//                         <FiMessageSquare />
//                       </td>
//                     </tr>

//                   </tbody>

//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
//             <div className="p-2 inline-block min-w-full">
//               <div className="overflow-hidden border-t-2">

//                 <div className='pt-5'>
//                   <span className='font-bold '>Client Documents</span>
//                 </div>

//                 <table className="min-w-full">

//                   <tbody>

//                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         abc.pdf
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         10/07/2023
//                       </td>
//                     </tr>

//                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         xyz.pdf
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         07/07/2023
//                       </td>
//                     </tr>
                    
//                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         sg.doc
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                         07/07/2023
//                       </td>
//                     </tr>

//                   </tbody>

//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>

//     </div>
//   )
// }

function ClientProfileCard({ clientData }) {
  const { fname, lname, email, phone, city, emName1, emName2, emName3, emPhone1, emPhone2, emPhone3} = clientData;

  return (
    <div>
      <figure className='pt-5 border-b-2'>
      <img
            alt="client"
            className='w-28 h-28 rounded-full mx-auto'
            src= {avatarPNG}
          />
        <figcaption className='text-center mt-5 flex-wrap'>
          <p className='text-gray-700 font-semibold text-xl mb-2'>
            {fname} {lname}
          </p>
          <p className='text-gray-700 mb-2'>{phone}</p>
          <p className='text-gray-700 mb-2'>{email}</p>
          <p className='text-gray-700 mb-2'>{city}</p>
          <div className='ml-auto'>
            <Link to={'doctors'}>
              <button className='bg-blue-700 mb-2 rounded-md p-2 border text-white hover:bg-white hover:border-blue-700 hover:text-black'>
                Refer Doctors
              </button>
            </Link>
          </div>
        </figcaption>
      </figure>

      <div className="flex flex-col">
           <div className=" sm:mx-0.5 lg:mx-0.5"> 
           {/* overflow-x-auto */}
             <div className="p-2 inline-block min-w-full">
               <div className="overflow-hidden ">

                 <div className='pt-5'>
                   <span className='font-bold '>Emergency Contacts</span>
                 </div>

                 <table className="min-w-full">

                   <thead className="bg-gray-200 border-b">
                     <tr>
                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                         Name
                       </th>
                       <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                         Phone
                       </th>
                       {/* <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                       </th> */}
                     </tr>
                   </thead>

                   <tbody> 
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {emName1}
                       </td>
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         {emPhone1}
                       </td>
                       {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                         <FiMessageSquare />
                       </td> */}
                     </tr>

                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         {emName2}
                       </td>
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         {emPhone2}
                       </td>
                       {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                         <FiMessageSquare />
                       </td> */}
                     </tr>
                    
                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         {emName3}
                       </td>
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         {emPhone3}
                       </td>
                       {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                         <FiMessageSquare />
                       </td> */}
                     </tr>

                   </tbody>

                 </table>
               </div>
             </div>
           </div>
         </div>

         <div className="flex flex-col">
           <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
             <div className="p-2 inline-block min-w-full">
               <div className="overflow-hidden border-t-2">

                 <div className='pt-5'>
                   <span className='font-bold '>Client Documents</span>
                 </div>

                 <table className="min-w-full">

                   <tbody>

                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         abc.pdf
                       </td>
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         10/07/2023
                       </td>
                     </tr>

                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         xyz.pdf
                       </td>
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         07/07/2023
                       </td>
                     </tr>
                    
                     <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         sg.doc
                       </td>
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         07/07/2023
                       </td>
                     </tr>

                   </tbody>

                 </table>
               </div>
             </div>
           </div>
         </div>
    </div>
  );
}

// const ClientProfileCard = ({clientData}) => {
//   return (
//     <>
//       {clientData?.map ((client) => {

//         return(
//           <div key={client.id}>
//             <figure className='pt-5 border-b-2'>
//               <img
//                   alt="client"
//                   className='w-28 h-28 rounded-full mx-auto'
//                   src= {avatarPNG}
//                 />
//               <figcaption className='text-center mt-5 flex-wrap'>
//                 <p className='text-gray-700 font-semibold text-xl mb-2'>
//                   {client.fname} {client.lname}
//                 </p>
//                 <p className='text-gray-700 mb-2'>{client.phone}</p>
//                 <p className='text-gray-700 mb-2'>{client.email}</p>
//                 <p className='text-gray-700 mb-2'>Colombo</p>
//                 <div className='ml-auto'>
//                   <Link to={'doctors'}>
//                     <button className='bg-blue-700 mb-2 rounded-md p-2 border text-white hover:bg-white hover:border-blue-700 hover:text-black'>
//                       Refer Doctors
//                     </button>
//                   </Link>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>
//         )})}
//     </>
// )}

export default ClientProfileCard
