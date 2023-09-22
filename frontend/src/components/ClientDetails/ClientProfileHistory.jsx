import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
  

const ClientProfileHistory = () => {

  const [notes, setNotes] = useState({
    date: '',
    duration: '',
    note: ''
  });

  const saveNote = async (e) => {
    e.preventDefault();
    const newNote = {
      date: notes.date,
      duration: notes.duration,
      note: notes.note,
    };

    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        };

        const response = await axios.post(
          `http://localhost:8080/api/client/saveClientNote`,
          newNote,
          config
        );

        if (response.status === 202) {
          console.log("Note added successfully");
          alert("Note added successfully");
        } else {
          console.log("Note added successfully");
          alert("Note added successfully");
        }

        window.location.href = '#';
        setNotes({ date: '', duration: '', note: '' });
      }
    } catch (error) {
      console.log('Error saving blog: ', error);
      alert('An error occurred while saving the blog.');
    }
  };

  const [clientNotes, setClientNotes] = useState([]);

  useEffect(() => {
    const viewNotes = async () => {
      //e.preventDefault();
      try {
        console.log("Fetching notes data...");
        const authData = localStorage.getItem('authData');
        if (authData) {
          const { accessToken } = JSON.parse(authData);
          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            },
            withCredentials: true,
          };

          const response = await axios.get(
            `http://localhost:8080/api/client/getClientNotes`,
            config
          );

          if (Array.isArray(response.data)) {
            const fetchedNote = response.data.map(note => ({
              id: note.id,
              date: `${note.date}`,
              duration: `${note.duration}`,
              note: `${note.note}`
            }));
            setClientNotes(fetchedNote);
          } else {
            console.error("error occurred")
          }

          // if (response.status === 200) {
          //   console.log("Notes fetched successfully");
          //   setClientNotes(response.data);
          // } else {
          //   console.log("Not Successful");
          // }

        }
      } catch (error) {
        console.log('Error fetching notes: ', error);
        alert('An error occurred while fetching the notes.');
      }
    }
 
    viewNotes();
  }, []);  

  return (
    <div>
      
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="inline-block min-w-full p-2">
            <div className="overflow-hidden ">

              <div className='pt-3'>
                <span className='font-bold '>Diagnostic Test Results</span>
              </div>

              <table className="min-w-full mt-4">

                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th scope="col" className="px-6 py-2 text-sm font-medium text-gray-900">
                      Results
                    </th>
                    <th scope="col" className="px-6 py-2 text-sm font-medium text-gray-900">                       
                      Date
                    </th>
                    <th scope="col" className="px-6 py-2 text-sm font-medium text-gray-900">

                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="text-center transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                    <td className="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap">
                      Mild
                    </td>
                    <td className="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap">
                      07/08/2023
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 cursor-pointer whitespace-nowrap hover:text-blue-700">
                      <button className="px-4 py-2 text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
                        Open Test
                      </button>
                    </td>
                  </tr>

                  <tr className="text-center transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                    <td className="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap">
                      Average
                    </td>
                    <td className="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap">
                      07/07/2023
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 cursor-pointer whitespace-nowrap hover:text-blue-700">
                      <button className="px-4 py-2 text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
                        Open Test
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="text-center transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                    <td className="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap">
                      Severe
                    </td>
                    <td className="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap">
                      07/06/2023
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 cursor-pointer whitespace-nowrap hover:text-blue-700">
                      <button className="px-4 py-2 text-white bg-blue-700 border rounded-md hover:bg-white hover:border-blue-700 hover:text-black ">
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
        <div className="col-span-2 p-2">
          <div className="overflow-hidden">
            <div className="pt-5">
              <span className="ml-8 font-bold">Add Notes</span>
            </div>

              <form onSubmit={saveNote} className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Date">
                  Session Date:
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="date"
                  id="Date"
                  value={notes.Date}
                  onChange={(e) => setNotes({...notes, date:e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Duration">
                  Session Duration (minutes):
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="number"
                  id="Duration"
                  value={notes.Duration}
                  onChange={(e) => setNotes({...notes, duration: e.target.value})}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="note">
                  Notes:
                </label>
                <textarea
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="note"
                  value={notes.note}
                  onChange={(e) => setNotes({...notes, note: e.target.value})}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Grid 2 */}
          <div className="col-span-4 p-2">
      <div className='pt-5'>
        <span className="ml-8 font-bold">Client History</span>
        {clientNotes.map((clientNote, index) => (
          <div key={clientNote.id} className="p-5 m-10 bg-blue-100 rounded-lg">
            <p className="text-gray-800">
              <span className="font-semibold">Session Date:</span> {clientNote.date}<br />
              <span className="font-semibold">Session Duration:</span> {clientNote.duration} minutes<br /><br />
              <span className="font-semibold">Summary:</span> {clientNote.note}
            </p>
          </div>
        ))}
      </div>
    </div>

</div>


    </div>
  )
}

export default ClientProfileHistory
