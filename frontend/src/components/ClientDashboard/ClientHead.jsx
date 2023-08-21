import React from "react";

const ClientHead = ({ username }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
      <h2 className="text-xl font-semibold">Welcome, {username}!</h2>
      {/* Rest of your component content */}
    </div>
  );
};

export default ClientHead;

