import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useAuth } from '../components/useAuth';
import Modal from '../components/Modal';
import Login from '../components/Login';


const MentorshipGuide = () => {
  const { user, logout }= useAuth();
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
      <h1 className="text-4xl font-bold mb-4">Mentorship</h1>
    </div>
     
    <div className="bg-blue-300 p-6">
      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Becoming a Mentor</h2>
        <p className="text-gray-700">
          Mentorship is a rewarding journey that creates a lasting impact. Discover how to become an effective mentor and inspire others:
        </p>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Why Become a Mentor?</h2>
        <p className="text-gray-700">
          Becoming a mentor is an opportunity to share your wisdom and experiences, guiding others to personal and professional growth.
        </p>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Key Points for Effective Mentoring</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Establish clear goals and expectations with your mentee.</li>
          <li>Listen actively and provide constructive feedback.</li>
          <li>Be patient and offer unwavering support during the mentorship journey.</li>
          <li>Set a positive example, serving as a role model for your mentee.</li>
          <li>Encourage self-reflection and personal growth in your mentee.</li>
        </ul>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">The Mentorship Journey</h2>
        <p className="text-gray-700">
          Mentorship is a journey of mutual growth, shaping both the mentor and the mentee. Embrace the opportunity to make a profound impact.
        </p>
      </div>

      <div className="shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Conclusion</h2>
        <p className="text-gray-700">
          Becoming a mentor is a noble endeavor. It not only benefits your mentee but also fosters your personal growth and learning.
        </p>
      </div>
    </div>
  </div>
  );
};

export default MentorshipGuide;
