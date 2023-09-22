import React from 'react'
import {useState, useEffect} from 'react'
  

function ClientProfileHistory() {

  const [sessionDate, setSessionDate] = useState('');
  const [sessionDuration, setSessionDuration] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields here if needed

    // Create a new note object
    const newNote = {
      sessionDate,
      sessionDuration,
      summary,
    };

    // Call the onAddNote function to add the note
    onAddNote(newNote);

    // Clear the form fields
    setSessionDate('');
    setSessionDuration('');
    setSummary('');
  };

  return (
    <div>
      
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="p-2 inline-block min-w-full">
            <div className="overflow-hidden ">

              <div className='pt-3'>
                <span className='font-bold '>Diagnostic Test Results</span>
              </div>

              <table className="min-w-full mt-4">

                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">
                      Results
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">                       
                      Date
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">

                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center">
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                      Mild
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                      07/08/2023
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                      <button className="bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
                        Open Test
                      </button>
                    </td>
                  </tr>

                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center">
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                      Average
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                      07/07/2023
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                      <button className="bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
                        Open Test
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-center">
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                      Severe
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                      07/06/2023
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                      <button className="bg-blue-700 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6">
        {/* Grid 1 */}
        <div className="p-2 col-span-2">
          <div className="overflow-hidden">
            <div className="pt-5">
              <span className="font-bold">Add Notes</span>
            </div>

              <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sessionDate">
                  Session Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  id="sessionDate"
                  value={sessionDate}
                  onChange={(e) => setSessionDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sessionDuration">
                  Session Duration (minutes):
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="sessionDuration"
                  value={sessionDuration}
                  onChange={(e) => setSessionDuration(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
                  Summary:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="p-2 col-span-4">
          <div className='pt-5'>
            <span className="font-bold">Client History</span>
            <div className="m-10 p-5 bg-blue-100 rounded-lg">
              <p className="text-gray-800">
                <span className="font-semibold">Session Date:</span> August 16, 2023<br />
                <span className="font-semibold">Session Duration:</span> 60 minutes<br /><br />

                <span className="font-semibold">Summary:</span> During today's session, Michelle expressed her feelings of overwhelm due to her workload and family responsibilities. We discussed various stress management techniques, including deep breathing exercises and time management strategies. Michelle seemed receptive to the suggestions and agreed to practice these techniques during the upcoming week.
              </p>
            </div>
          </div>
        </div>

</div>


    </div>
  )
}

export default ClientProfileHistory
