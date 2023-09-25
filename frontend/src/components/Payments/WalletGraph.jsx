import React, { useState } from 'react';

export default function WalletGraph() {
    const [withdrawalData, setWithdrawalData] = useState({
        amount: '',
        bankName: '',
        accountName: '',
        receiverName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWithdrawalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleWithdraw = () => {
        // Implement your withdrawal logic here
        // You can access withdrawalData.amount, withdrawalData.bankName, etc. here
        // Send this data to your API or perform any other necessary actions
        console.log('Withdrawal Data:', withdrawalData);
    };

    return (
        <div className="col-span-1 row-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-4 h-full flex flex-col justify-center items-center">
                <div className="mb-4">
                  <br />
                <h1 style={{ fontWeight: 'bold' }}>Withdraw Money</h1>
                    <br />
                  <br />
                    <label htmlFor="amount" className="block text-m font-medium text-gray-700">
                        Amount to withdraw
                    </label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={withdrawalData.amount}
                        onChange={handleChange}
                        placeholder="Enter amount"
                        className="mt-1 p-2 border rounded-md w-64"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="bankName" className="block text-m font-medium text-gray-700">
                        Bank Name
                    </label>
                    <input
                        type="text"
                        id="bankName"
                        name="bankName"
                        value={withdrawalData.bankName}
                        onChange={handleChange}
                        placeholder="Enter bank name"
                        className="mt-1 p-2 border rounded-md w-64"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="accountName" className="block text-m font-medium text-gray-700">
                        Account Name
                    </label>
                    <input
                        type="text"
                        id="accountName"
                        name="accountName"
                        value={withdrawalData.accountName}
                        onChange={handleChange}
                        placeholder="Enter account name"
                        className="mt-1 p-2 border rounded-md w-64"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="receiverName" className="block text-m font-medium text-gray-700">
                        Receiver Name
                    </label>
                    <input
                        type="text"
                        id="receiverName"
                        name="receiverName"
                        value={withdrawalData.receiverName}
                        onChange={handleChange}
                        placeholder="Enter receiver name"
                        className="mt-1 p-2 border rounded-md w-64"
                    />
                </div>
                <button
                    onClick={handleWithdraw}
                    className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Withdraw
                </button>
                <br />
            </div>
        </div>
    );
}
