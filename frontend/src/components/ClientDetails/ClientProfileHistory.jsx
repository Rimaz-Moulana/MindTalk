import React from 'react'

function ClientProfileHistory() {
  return (
    <div>
      
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="p-2 inline-block min-w-full">
            <div class="overflow-hidden ">

              <div className='pt-5'>
                <span className='font-bold '>Diagnostic Test Results</span>
              </div>

              <table class="min-w-full">

                <thead class="bg-gray-200 border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                      Results
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">                       
                      Date
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">

                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Mild
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      07/08/2023
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                      <button class="bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
                        Open Test
                      </button>
                    </td>
                  </tr>

                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Average
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      07/07/2023
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                      <button class="bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
                        Open Test
                      </button>
                    </td>
                  </tr>
                  
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Severe
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      07/06/2023
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                      <button class="bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
                        Open Test
                      </button>
                    </td>
                  </tr>

                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>

      <div className='p-2 pt-10'>
        <div>
          <span className='font-bold '>Client History</span>
        </div>
      </div>

    </div>
  )
}

export default ClientProfileHistory
