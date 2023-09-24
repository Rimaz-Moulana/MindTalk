import React from 'react';
import graph2Image from "../../components/Payments/graph2.png"

export default function WalletGraph() {
    return (
        <div className="col-span-2 row-span-2">
        <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 h-full flex justify-center items-center">
          <img src={graph2Image} alt="Graph 2" className="max-w-[500px] h-auto" />
        </div>
      </div>
    );
}
