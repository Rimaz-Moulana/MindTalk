import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RequestTable() {
    // const [showModal, setShowModal] = React.useState(false);
    
    // data from the database will store here
    const data = JSON.parse(localStorage.getItem("detailsData"));
    console.log(data)
    const [tableData,setTableData] = useState([]);

    const loadDataFromLocalStorage = () => {
        if(data){
            setTableData(data);
        }
    }

    console.log(tableData);

    useEffect(() => {
        loadDataFromLocalStorage();
    },[]);
    
    
    console.log(tableData)
    const [date,setDate] = useState('');
    const [isHovered,setIsHovered] = useState(false);
    //  console.log(data.length)
    // console.log(data[0].licenseImage);
        for(let i = 0;i < data.length ; i++)
        {
        console.log(data[i].licenseImage);
        if(data[i].licenseImage){
            data[i].licenseImage = data[i].licenseImage.replace('C:\\fakepath\\','');
            console.log(data[i].licenseImage);
        }
    }

    const handleMouseEnter = () =>{
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    useEffect( ()=>{
        const currentDate = new Date();
        
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; //month are start at zero index
        const day = currentDate.getDay();

        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        setDate(formattedDate);
    }, [])
    
//    const handleSubmit = () => {
//     console.log(`Sending email to: ${data.email}`)
//    }

   const deleteRow = (index) => {
    const updatedSessionData = [...tableData];
    updatedSessionData.splice(index,1);
    setTableData(updatedSessionData);
    localStorage.setItem('tableData', JSON.stringify(updatedSessionData));
   }

   const handleSubmit= async (index) =>{
    const confirmed = window.confirm("Are you sure you want to accept this Counsellor?");
    if(confirmed){
        try{
            const authData = localStorage.getItem('authData');
            if(authData){
                const {accessToken} = JSON.parse(authData);
    
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials : true,
                }
                console.log(config);
    
            const rowResult = tableData[index];
            console.log(rowResult)
            const result = await axios.post("http://localhost:8080/api/counsellor/details/add",rowResult, config);
            console.log("successfully added",result.data);
            }
            
            
        }
        catch(error){
            console.error('this ids the error:',error);
        }
    }

    // const selectedSession = tableData[index];

    const updatedSessions = [...tableData];
    updatedSessions.splice(index, 1);
    localStorage.setItem('therapySessions', JSON.stringify(updatedSessions));
    setTableData(updatedSessions);
}

    //     const Requests = [
    //     {
    //         id: 1,
    //         avatar: '../../../src/assets/dp.png',
    //         name: 'Pathum Lakshan',
    //         date: '2023.08.21'
    //     },
    //     {
    //         id: 2,
    //         avatar: '../../../src/assets/dp.png',
    //         name: 'Michelle Nikeetha',
    //         date: '2023.08.23'
    //     },
    //     {
    //         id: 3,
    //         avatar: '../../../src/assets/dp.png',
    //         name: 'Rochelle Perera',
    //         date: '2023.09.01'
    //     },
    //     {
    //         id: 4,
    //         avatar: '../../../src/assets/dp.png',
    //         name: 'Kaveesha Muthukuda',
    //         date: '2023.08.24'
    //     },
    //     {
    //         id: 5,
    //         avatar: '../../../src/assets/dp.png',
    //         name: 'Rimaz Moulana',
    //         date: '2023.09.04'
    //     },
    //     {
    //         id: 6,
    //         avatar: '../../../src/assets/dp.png',
    //         name: 'Kivi Amarakoon',
    //         date: '2023.10.01'
    //     }
    // ]
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <h4 className="text-xl font-semibold text-left ml-5">New Requests</h4>
                    <div className="overflow-hidden pb-5 px-6">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b border-gray-200 font-medium dark:border-neutral-300">
                                <tr>
                                    <th scope="col" className="px-2 py-2"></th>
                                    <th scope="col" className="px-2 py-2">
                                        Name
                                    </th>
                                    <th scope="col" className="px-2 py-2">
                                        Date
                                    </th>
                                    <th scope="col" className="px-2 py-2">
                                        License Number
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        License Image
                                    </th>
                                    <th scope="col" className="text-center px-6 py-4">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            {/* {data ? ( */}
                            <tbody>
                                {tableData.map((request,index) => (
                                    <tr
                                        key={index}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-neutral-50"
                                    >
                                        <td className="whitespace-nowrap px-1 py-1 font-medium">
                                            <img src='../../../src/assets/dp.png' alt="" className="w-10 h-10 rounded-full" />
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2">{request.firstname +' '+request.lastname}</td>
                                        <td className="whitespace-nowrap px-2 py-2">{date}</td>
                                        <td className="whitespace-nowrap px-2 py-2">{request.licenseNo}</td>
                                        <td 
                                        className="whitespace-nowrap px-1 py-1" 
                                       
                                        >
                                        {/* {console.log(request.licenseImage)} */}
                                        {isHovered ? (
                                        <img
                                            className='w-[400px]'
                                            src={`../../../src/assets/${request.licenseImage}`}
                                            alt="Zoomed Image"
                                            style={{ width: '600px', height: '400px' }}
                                        />
                                        ) : (
                                        <img
                                            src={`../../../src/assets/${request.licenseImage}`}
                                            alt="Original Image"
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                        )}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button onClick={() => handleSubmit(index)} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Accept</button>
                                            <button onClick={() => deleteRow(index)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 ml-2 px-4 rounded'>Decline</button>
                                        </td>
                                        {/* <td className="whitespace-nowrap px-6 py-4">
                                            
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                            {/* ):<div>
                                <h1 className="text-xl font-semibold ml-1 mt-48">Counsellors Added details not yet!</h1>
                            </div>
                            } */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
