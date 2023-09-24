import React from 'react';
import { FiDollarSign, FiPocket, FiHome } from 'react-icons/fi';
import graph1Image from "../../components/Payments/graph1.png"

export default function WalletCards() {
  return (
    <div className="grid grid-cols-3 gap-4 grid-row-2 gap-1">
      {/* Card 1 */}
      <div className="col-span-1">
      <div className="bg-white rounded-xl shadow-md border-blue-500 border shadow-md  overflow-hidden text-center p-5 h-40 flex flex-col justify-between">
            <div className="icon-container relative">
              <FiDollarSign className="icon text-3xl text-blue-500"></FiDollarSign>
            </div>
            <div className="content mt-4 flex flex-col justify-end">
              <p className="text-s text-blue-500">Total Balance</p>
              <p className="font-bold text-2xl text-blue-500">$1000.00</p>
            </div>
          </div>
      </div>
      {/* Card 2 */}
      <div className="col-span-1 row-span-1">
      <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-40 flex flex-col justify-between">
            <div className="icon-container relative">
              <FiPocket className="icon text-3xl"></FiPocket>
            </div>
            <div className="content mt-4 flex flex-col justify-end">
              <p className="text-s">Total Withdraw</p>
              <p className="font-bold text-2xl">$1000.00</p>
            </div>
          </div>
      </div>
      {/* Card 3 */}
      <div className="col-span-1 row-span-1">
      <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-40 flex flex-col justify-between">
            <div className="icon-container relative">
              <FiHome className="icon text-3xl"></FiHome>
            </div>
            <div className="content mt-4 flex flex-col justify-end">
              <p className="text-s">Monthly income</p>
              <p className="font-bold text-2xl">$1000.00</p>
            </div>
          </div>
      </div>
      <div className="col-span-3 row-span-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-160">
            <img src={graph1Image} alt="Graph 1" className="w-full h-full object-cover" />
          </div>
        </div>
    </div>
  );
}
