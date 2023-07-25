import React from 'react';
import { FiDollarSign, FiPocket, FiHome } from "react-icons/fi"
import graph1Image from './graph1.png'
import graph2Image from './graph2.png'

export default function Wallet() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* wallet name */}
      <div className="bg-white rounded-xl md:col-span-3">
        <div
          className="bg-white rounded-xl shadow-md overflow-hidden text-left p-5 h-15"
          style={{ fontSize: '22px', fontWeight: 'bold' }}
        >
          Wallet
        </div>
      </div>

      {/* Three cards and an additional card */}
      <div className="grid grid-cols-5 gap-4 grid-row-2 gap-1">
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
        <div className="col-span-2 row-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-full flex justify-center items-center">
            <img src={graph2Image} alt="Graph 2" className="max-w-[500px] h-auto" />
          </div>
        </div>

        <div className="col-span-3 row-span-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-80">
            <img src={graph1Image} alt="Graph 1" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* wallet name */}
      <div className="bg-white rounded-xl md:col-span-3">
        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-60">
          {/* Wallet name content goes here */}
        </div>
      </div>
    </div>
  );
}
