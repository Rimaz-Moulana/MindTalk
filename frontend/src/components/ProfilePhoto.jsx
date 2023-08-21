import React from 'react'

const ProfilePhoto = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="object-cover w-48 h-48 rounded-full"
        src="https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="Profile Photo"
      />
    </div>
  );
}

export default ProfilePhoto;

