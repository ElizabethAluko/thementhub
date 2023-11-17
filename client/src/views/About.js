import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useAuth } from '../components/useAuth';
import Modal from '../components/Modal';
import Login from '../components/Login';

const VisionMissionValues = () => {
  const { user, logout }= useAuth();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {setLoginModalOpen(true);};

  return (
    <div>
	{/* Navigation Bar */}                               <Navigation openLoginModal={openLoginModal} user={user} logout={logout} />

	{/* Conditionally render the login form */}
        {isLoginModalOpen && (
          <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
          {/* LoginForm component here */}
            <Login />
	  </Modal>
	)}

	<div className="bg-gray-800 py-8 text-white text-center">
         <h1 className="text-4xl font-bold mb-4">About Us</h1>
         <p className="text-yellow-400">Support! Empower!</p>
       </div>
	
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-200 rounded-lg bg-white">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Vision Statement</h2>
          <p className="text-gray-700">
            Empowering a generation of leaders by fostering a world where mentorship, guidance, and shared accountability are the cornerstones of personal and professional growth. Together, we inspire and shape brighter futures.
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg bg-white">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Mission Statement</h2>
          <p className="text-gray-700">
            Our mission is to create a dynamic platform where experienced mentors, eager mentees, and individuals committed to personal growth converge. We facilitate meaningful connections, provide guidance, and cultivate a culture of mutual support. Through mentorship, goal-sharing, and unwavering encouragement, we aim to unlock the full potential of every member of our community.
          </p>
        </div>

      <div className="p-4 border border-gray-200 rounded-lg bg-white">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Core Values</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>Empowerment:</strong> We believe in the transformative power of mentorship and self-accountability to empower individuals to achieve their dreams.</li>
          <li><strong>Collaboration:</strong> We foster a collaborative environment where mentors and mentees come together to exchange knowledge, experiences, and inspiration.</li>
          <li><strong>Support:</strong> We are committed to offering unwavering support and encouragement to our community members on their journeys toward success.</li>
          <li><strong>Growth:</strong> We believe in continuous personal and professional growth as the key to realizing one's full potential.</li>
          <li><strong>Accountability:</strong> We encourage members to set and monitor their goals, promoting self-accountability and shared accountability within our community.</li>
          <li><strong>Integrity:</strong> We uphold the highest standards of integrity, honesty, and respect in all interactions within our community.</li>
          <li><strong>Innovation:</strong> We continuously seek innovative ways to enhance the mentorship and goal-setting experience for our users.</li>
          <li><strong>Diversity and Inclusion:</strong> We celebrate diversity and embrace individuals from all backgrounds, experiences, and career paths.</li>
        </ul>
      </div>
    </div>
   </div>
  </div>
  );
};

export default VisionMissionValues;
