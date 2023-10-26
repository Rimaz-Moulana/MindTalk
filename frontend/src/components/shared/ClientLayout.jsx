import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
    // Initialize the state to store the client ID
    const [clientId, setClientId] = useState(null);

    // useEffect to retrieve the client ID from localStorage
    useEffect(() => {
        const authData = localStorage.getItem('authData');
        if (authData) {
            const { id } = JSON.parse(authData);
            setClientId(id); // Set the client ID in the state
        }
    }, []); // Empty dependency array, so it runs once when the component mounts

    // const id = 1; // Replace with your actual client ID

    return (
        <div className="flex flex-row w-screen h-screen overflow-hidden bg-slate-100">
            <Sidebar />
            <div className="flex flex-col flex-1 h-screen">
                <Header id={clientId}/>
                <div className="h-full min-h-0 p-4 overflow-auto">{<Outlet />}</div>
            </div>
        </div>
    )
}