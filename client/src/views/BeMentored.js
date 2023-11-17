import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useAuth } from '../components/useAuth';
import Modal from '../components/Modal';
import Login from '../components/Login';


const FindAMentorGuide = () => {
  const { user, logout}= useAuth();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {setLoginModalOpen(true);};

  return (
    <div>
        {/* Navigation Bar */}
        <Navigation openLoginModal={openLoginModal} user={user} logout={logout} />

	{/* Conditionally render the login form */}
	{isLoginModalOpen && (
	   <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
	  {/* LoginForm component here */}
	  <Login />
	</Modal>
	)}
    <div className="bg-gray-800 py-8 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Be Mentored</h1>
    </div>   

    <div className="bg-purple-300 p-6">
      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Finding a Mentor</h2>
        <p className="text-gray-700">
          Finding the right mentor can be a transformative experience. Discover the steps to find a mentor who can guide you on your journey.
        </p>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Why Seek a Mentor?</h2>
        <p className="text-gray-700">
          Seeking a mentor provides an opportunity to learn from someone with more experience and expertise in your field, accelerating your personal and professional growth.
        </p>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Attributes to Look for in a Mentor</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Experience and expertise in your area of interest.</li>
          <li>Effective communication and willingness to share knowledge.</li>
          <li>Commitment to your growth and development.</li>
          <li>Alignment with your values and goals.</li>
        </ul>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Connecting with a Mentor</h2>
        <p className="text-gray-700">
          Explore various channels to connect with potential mentors, such as networking events, online platforms, and professional organizations.
        </p>
      </div>

      <div className="shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Conclusion</h2>
        <p className="text-gray-700">
          Finding a mentor can be a life-changing experience that propels your personal and professional growth. Use your mentor's guidance to achieve your goals and aspirations.
        </p>
      </div>
    </div>
  </div>
  );
};

export default FindAMentorGuide;
