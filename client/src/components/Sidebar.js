import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ user, handleLogout}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
      <div className="bg-gray-800 text-white w-64 h-screen flex flex-col p-4">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="mt-8 space-y-4">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/tasks">Your Tasks</Link>
          </li>
          <li>
            <Link to="/chat">Chat with your Mentor</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <hr className="my-4" />
      if (user.avatar) {
        <div className="flex items-center">
          <img src={user.avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
          <div>
            <div className="text-sm">{user.firstName}</div>
          </div>
        </div>}
        <div className="mt-4">
          <button onClick={handleLogout} className="w-full py-2 bg-red-500 hover:bg-red-600 rounded text-white">
            Logout
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-12 w-12 flex items-center justify-center cursor-pointer transition-transform duration-300 ${
          isOpen ? 'transform translate-x-64' : 'transform translate-x-0'
        }`}
        onClick={toggleSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
