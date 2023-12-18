// client/src/components/Navigation.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { useAuth } from './useAuth';

function Navigation({ openLoginModal, user, logout }) {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

//useEffect(() => {
//	const userData = userData;
//	setUser(userData);
//}, []);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // const { user = null, logout } = useAuth();


  return (
    <nav className="bg-blue-900 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-2xl font-bold">
	    <img src="/logo192.png" alt="AccountaHub"
	      className="w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14"
	  />
	  </a>
        </div>
	<h1 className="text-white font-bold text-center">AccountaHub</h1>
        {/* Hamburger Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (visible on larger screens) */}
        <div className="hidden md:flex space-x-6">
	  <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/" className="text-white hover:underline">Services</Link>
          <a href="/About" className="text-white hover:underline">About</a>

	  {location.pathname === '/dashboard' && user ? (
            <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex items-center text-white focus:outline-none"
          >
          <div className="w-8 h-8 relative rounded-full bg-blue-500 flex items-center justify-center text-lg">
	    {user.firstName ? <span>{user.firstName.charAt(0)}</span> : null}
          </div>
        </button>
        </div>
      ) : (
        <button onClick={openLoginModal} className="text-white hover:underline">
          Login
        </button>
      )}
        </div>
      </div>


     {/* User Profile (visible on big screens) */}
     {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 top-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            <div className="px-4 py-2">
              <img
                src='/avatar.png'
                alt={user.firstName}
                className="w-9 h-9 rounded-full mx-auto"
              />
              <h3 className="text-center text-lg font-semibold text-gray-900">
                {user.fistName}
              </h3>
              {/* Add more user information here */}
            </div>
            <div className="border-t border-gray-200">
	     <div className="group flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</div>
	     <div className="group flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</div>
              <button
                type="button"
                onClick={logout}
                className="group flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
	 </div>
	</div>
	)}

      {/* Responsive Mobile Menu (visible on small screens) */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
	 <Link to="/" className="block text-white py-2">Home</Link>
          <Link to="/Mentor" className="block text-white py-2">Mentor</Link>
	  <Link to="/Mentored" className="block text-white py-2">Find a Mentor</Link>
	  <Link to="/MutualSupport" className="block text-white py-2">Mutual Support</Link>
	  <Link to="/SelfHelp" className="block text-white py-2">Self Help</Link>
	  <Link to="/About" className="block text-white py-2">About Us</Link>

	  {location.pathname === '/dashboard' && user ? (
	    <div>
	    <hr />
            <p className="block text-white py-2">{user.firstName}</p>
	    <Link to="/dashboard/Profile" className="block text-white py-2">Profile</Link>
            <button onClick={logout} className="text-white hover:underline">
              Logout
            </button>
	    </div>
      ) : (
        <button onClick={openLoginModal} className="text-white hover:underline">
          Login
        </button>
      )}
	
        </div>
      )}
    </nav>
  );
}


export default Navigation;
