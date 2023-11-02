import React, { useState, useEffect } from 'react';
import { FiDollarSign, FiPocket, FiHome } from 'react-icons/fi';
import graph1Image from '../../assets/wall.png'
import axios from 'axios';

export default function WalletCards() {
    const [balance, setBalance] = useState(null);
    const [monthlyBalance, setMonthlyBalance] = useState(null);
    const [withdraw, setWithdraw] = useState(null);
    const [activeCard, setActiveCard] = useState(1); // Initial active card is 1

    const handleCardClick = (cardNumber) => {
        setActiveCard(cardNumber);
    };

    const fetchData = async () => {
        try {
            const authData = localStorage.getItem('authData');
            if (authData) {
                const { accessToken, id } = JSON.parse(authData);
                const config = {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                };

                // Retrieve the 'amount' from localStorage
                let amount = JSON.parse(localStorage.getItem('amount'));

                const response = await axios.get(`http://localhost:8080/api/v1/payments/sumAmounts/${id}`, config);
                console.log('API Response:', response.data);

                const Monthlyresponse = await axios.get(`http://localhost:8080/api/v1/payments/sumMonthlyAmounts/${id}`, config);
                console.log('API Response:', Monthlyresponse.data);

                const Withdrawresponse = await axios.get(`http://localhost:8080/api/v1/withdraws/sumWithdraws/${id}`, config);
                console.log('API Response:', Withdrawresponse.data);

                // Update state variables
                setBalance(response.data - amount);
                setMonthlyBalance(Monthlyresponse.data);
                setWithdraw(Withdrawresponse.data + amount);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();

        // Fetch data every 5 minutes (adjust the interval as needed)
        const intervalId = setInterval(fetchData, 100);

        return () => {
            clearInterval(intervalId); // Clear the interval when the component unmounts
        };
    }, []);




    return (
        <div className="grid grid-cols-3 gap-4 grid-row-2 gap-1">
            {/* Card 3 */}
            <div
                className={`col-span-1 row-span-1 ${activeCard === 3 ? 'border border-blue-500' : ''
                    }`}
                onClick={() => handleCardClick(3)}
            >

                <div className={`bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-40 flex flex-col justify-between ${activeCard === 3 ? 'text-blue-500' : 'text-black'
                    }`}>
                    <div className="icon-container relative">
                        <FiHome className="icon text-3xl" />
                    </div>
                    <div className="content mt-4 flex flex-col justify-end">
                        <p className="text-s">Monthly income</p>
                        <p className="font-bold text-2xl">
                            {typeof monthlyBalance === 'number' ? `Rs.${monthlyBalance.toFixed(2)}` : 'Rs.0.00'}
                        </p>

                    </div>
                </div>
            </div>
            {/* Card 1 */}
            <div
                className={`col-span-1 ${activeCard === 1 ? 'border border-blue-500' : ''
                    }`}
                onClick={() => handleCardClick(1)}
            >
                <div className={`bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-40 flex flex-col justify-between ${activeCard === 1 ? 'text-blue-500' : 'text-black'
                    }`}>
                    <div className="icon-container relative">
                        <FiDollarSign className="icon text-3xl" />
                    </div>
                    <div className="content mt-4 flex flex-col justify-end">
                        <p className="text-s">Total Balance</p>
                        <p className="font-bold text-2xl">
                            {balance !== undefined && balance !== null ? `Rs.${balance.toFixed(2)}` : 'Loading...'}
                        </p>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div
                className={`col-span-1 row-span-1 ${activeCard === 2 ? 'border border-blue-500' : ''
                    }`}
                onClick={() => handleCardClick(2)}
            >
                <div className={`bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-40 flex flex-col justify-between ${activeCard === 2 ? 'text-blue-500' : 'text-black'
                    }`}>
                    <div className="icon-container relative">
                        <FiPocket className="icon text-3xl" />
                    </div>
                    <div className="content mt-4 flex flex-col justify-end">
                        <p className="text-s">Total Withdraw</p>
                        <p className="font-bold text-2xl">
                            {withdraw !== undefined && withdraw !== null ? `Rs.${withdraw.toFixed(2)}` : 'Loading...'}
                        </p>
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className="col-span-3 row-span-1 text-center">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-160">
                    <img
                        src={graph1Image}
                        alt="Graph 1"
                        className="w-300 h-250 object-cover mx-auto" // Add mx-auto class to center the image horizontally
                    />
                </div>
            </div>

        </div>
    );
}
