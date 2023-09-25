import React from 'react';
import WalletCards from '../../components/Payments/WalletCards';
import WalletGraph from '../../components/Payments/WalletGraph';

export default function CounsellorWallet() {
    return (
        <div className="flex flex-col w-full mt-8">
            <div className="grid grid-cols-5 gap-1 w-full">
                {/* Left side for WalletCards */}
                <div className="col-span-3">
                    <WalletCards />
                </div>
                {/* Right side for WalletGraph */}
                <div className="col-span-2">
                    <WalletGraph />
                </div>
            </div>
        </div>
    );
}
