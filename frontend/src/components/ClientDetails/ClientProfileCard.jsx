import React from 'react'
import dp1 from '../../assets/dp1.jpg'
import { FiMessageSquare } from 'react-icons/fi'

function ClientProfileCard() {
  return (
    <div>

      <figure className='pt-5 border-b-2'>
          <img
            alt="client"
            className='w-28 h-28 rounded-full mx-auto'
            src= {dp1}
          />
          <figcaption className='text-center mt-5 flex-wrap'>
            <p className='text-gray-700 font-semibold text-xl mb-2'>
              John Doe
            </p>
            <p className='text-gray-700 mb-2'>
              0712345678
            </p>
            <p className='text-gray-700 mb-2'>
              johndoe@gmail.com
            </p>
            <p className='text-gray-700 mb-2'>
              Colombo
            </p>
          </figcaption>
        </figure>

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="p-2 inline-block min-w-full">
              <div class="overflow-hidden ">

                <div className='pt-5'>
                  <span className='font-bold '>Emergency Contacts</span>
                </div>

                <table class="min-w-full">

                  <thead class="bg-gray-200 border-b">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Name
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Phone
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Jane Doe
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        0713456789
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                        <FiMessageSquare />
                      </td>
                    </tr>

                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Jacob Thornton
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        0713456123
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                        <FiMessageSquare />
                      </td>
                    </tr>
                    
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Whitney Austin
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        0784569782
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                        <FiMessageSquare />
                      </td>
                    </tr>

                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="p-2 inline-block min-w-full">
              <div class="overflow-hidden border-t-2">

                <div className='pt-5'>
                  <span className='font-bold '>Client Documents</span>
                </div>

                <table class="min-w-full">

                  <tbody>

                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        abc.pdf
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        10/07/2023
                      </td>
                    </tr>

                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        xyz.pdf
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        07/07/2023
                      </td>
                    </tr>
                    
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        sg.doc
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
  )
}

export default ClientProfileCard
