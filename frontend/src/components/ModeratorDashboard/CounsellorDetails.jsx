import axios from 'axios';
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';

const GoogleSheetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your Google Sheets URL
    const googleSheetUrl = 'https://docs.google.com/spreadsheets/d/1c7Uc-nSfTCZ2VvQ0aQFYtycp3v_Lh-9_gvdkuYrgEdo/gviz/tq?tqx=out:csv';
    
    axios.get(googleSheetUrl)
    .then((response) => {
      // Use PapaParse to parse the CSV data
      Papa.parse(response.data, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (result) => {
          setData(result.data);
        },
        error: (error) => {
          console.error('CSV parsing error:', error.message);
        },
      });
    })
    .catch((error) => {
      console.error('Error fetching data from Google Sheets:', error);
    });
}, []);


  return (
    <div>
      <h1>Google Sheet Data</h1>
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheetData;
