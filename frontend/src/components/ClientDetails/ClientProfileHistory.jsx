import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import CryptoJS from 'crypto-js';

function getLevel(score) {
  if (score >= 0 && score <= 10) {
    return "Mild";
  } else if (score > 10 && score <= 20) {
    return "Moderate";
  } else if (score > 20 && score <= 30) {
    return "Severe";
  } else {
    return "Unknown";
  }
}

function getColorClass(level) {
  switch (level) {
    case 'Mild':
      return 'text-green-500';
    case 'Moderate':
      return 'text-yellow-500';
    case 'Severe':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
}

const ClientProfileHistory = ({ testDataList }) => {
  const sortedTestDataList = testDataList.slice().sort((a, b) => b.timestamp - a.timestamp);

  const [notes, setNotes] = useState({
    date: '',
    duration: '',
    note: ''
  });

  const handleDateChange = (e) => {
  // Parse the selected date
  const selectedDate = new Date(e.target.value);
  
  // Get the current date
  const currentDate = new Date();
  
  // Calculate the date that was two days ago
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(currentDate.getDate() - 2);

  if (selectedDate >= twoDaysAgo && selectedDate <= currentDate) {
    // The selected date is within the allowed range (today and the last two days).
    setNotes({ ...notes, date: e.target.value });
  } else {
    // The selected date is outside the allowed range.
    // You can display an error message or prevent form submission here.
    alert('Please select a date within today and the last two days.');
  }
};


  const saveNote = async (e) => {
    e.preventDefault();
    const newNote = {
      date: notes.date,
      duration: notes.duration,
      note: CryptoJS.AES.encrypt(notes.note, 'your-secret-key').toString(),
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

        window.location.href = 'CounsellorClientProfile';
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
        const fetchedNote = response.data.map((note) => ({
          id: note.id,
          date: `${note.date}`,
          duration: `${note.duration}`,
          note: CryptoJS.AES.decrypt(note.note, 'your-secret-key').toString(CryptoJS.enc.Utf8), // Decrypt the note
        }));
        fetchedNote.sort((a, b) => new Date(b.date) - new Date(a.date));
        setClientNotes(fetchedNote);
      } else {
        console.error("error occurred");
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

  // Function to check if the date is within the allowed range (past two days)
  const isDateInAllowedRange = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 2); // Subtract 2 days

    return selectedDate >= currentDate;
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="inline-block min-w-full p-2">
            <div className="overflow-hidden ">
              <div className='pt-3'>
                <span className='font-bold ml-8'>Diagnostic Test Results</span>
              </div>
              {testDataList.length > 0 ? (
                <table className="min-w-full mt-4">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th scope="col" className="px-6 py-2 text-sm font-medium text-gray-900">
                        Results
                      </th>
                      <th scope="col" className="px-6 py-2 text-sm font-medium text-gray-900">                       
                        Level
                      </th>
                      <th scope="col" className="px-6 py-2 text-sm font-medium text-gray-900">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedTestDataList?.map((testData, index) => (
                      <tr key={testData.id}
                        className="text-center transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap">
                          {testData.score}
                        </td>
                        <td className={`px-6 py-2 text-sm font-light whitespace-nowrap ${getColorClass(getLevel(testData.score))}`}>
                          {getLevel(testData.score)}
                        </td>
                        <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {moment(testData.timestamp).format('MMM Do YYYY')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center mt-4">
                  <p className="text-gray-600 text-lg font-bold">
                    No test results to display.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <hr  />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6">
        <div className="col-span-2 p-2">
          <div className="overflow-hidden">
            <div className="pt-5">
              <span className="ml-8 font-bold">Add Notes</span>
            </div>
            <form onSubmit={saveNote} className="px-8 pt-6 pb-8 mb-4 bg-white rounded ">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Date">
                  Session Date (within the past 2 days):
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="date"
                  id="Date"
                  value={notes.date}
                  onChange={(e) => handleDateChange(e)}
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
                  value={notes.duration}
                  onChange={(e) => setNotes({ ...notes, duration: e.target.value })}
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
                  onChange={(e) => setNotes({ ...notes, note: e.target.value })}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover-bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-4 p-2">
    <div className='pt-5'>
      <span className="ml-8 font-bold">Client History</span>
      <div className="scrollable-container" style={{ maxHeight: '645px', overflowY: 'auto' }}>
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
    </div>
  );
};

export default ClientProfileHistory;
