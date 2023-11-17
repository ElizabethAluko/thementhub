import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useAuth } from '../components/useAuth';
import Modal from '../components/Modal';
import Login from '../components/Login';


const SelfHelpGuide = () => {
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
      <h1 className="text-4xl font-bold mb-4">Self Help</h1>
    </div>
   
    <div className="bg-blue-300 p-6">
      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 ">Empowerment Through Self-Help</h2>
        <p className="text-gray-700">
          Self-help is the key to personal growth and empowerment. Discover how to harness your potential and make positive changes in your life.
        </p>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Why Self-Help Matters</h2>
        <p className="text-gray-700">
          Self-help enables you to take control of your life, set and achieve goals, and build resilience in the face of challenges.
        </p>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Steps to Self-Improvement</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Set clear and achievable goals for personal growth.</li>
          <li>Develop self-awareness and reflection practices.</li>
          <li>Build positive habits and routines to support your goals.</li>
          <li>Seek knowledge and skills through learning and self-improvement resources.</li>
        </ul>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Overcoming Obstacles</h2>
        <p className="text-gray-700">
          Learn how to overcome common obstacles and setbacks on your self-help journey, and stay motivated and focused on your goals.
        </p>
      </div>

      <div className="shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Conclusion</h2>
        <p className="text-gray-700">
          Self-help is a lifelong journey of personal growth and empowerment. By taking charge of your own development, you can create a more fulfilling and successful life.
        </p>
      </div>
    </div>
  </div>
  );
};

export default SelfHelpGuide;
