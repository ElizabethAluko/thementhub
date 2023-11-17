import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useAuth } from '../components/useAuth';
import Modal from '../components/Modal';
import Login from '../components/Login';


const MutualSupportGuide = () => {
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
      <h1 className="text-4xl font-bold mb-4">Mutual Support</h1>
    </div>

    <div className="bg-yellow-100 p-6">
      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">The Power of Mutual Support</h2>
        <p className="text-gray-700">
          Mutual support is a powerful force that can lead to personal and collective growth. Learn why you should embrace it and how to be part of this positive movement.
        </p>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Why Mutual Support Matters</h2>
        <p className="text-gray-700">
          Mutual support fosters a sense of belonging, provides a safety net during challenging times, and empowers individuals to reach their full potential.
        </p>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Benefits of Offering Help</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Helping others enhances your sense of purpose and fulfillment.</li>
          <li>It strengthens your relationships and builds a supportive community.</li>
          <li>Offering help can also help you develop new skills and gain fresh perspectives.</li>
        </ul>
      </div>

      <div className="mb-6 shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Seeking and Receiving Support</h2>
        <p className="text-gray-700">
          Don't hesitate to seek support when needed; it's a sign of strength, not weakness. Embrace the support offered by others and reciprocate it when possible.
        </p>
      </div>

      <div className="shadow-md p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Conclusion</h2>
        <p className="text-gray-700">
          Mutual support creates a network of encouragement and empowerment. By giving and receiving support, we can all thrive and achieve our goals.
        </p>
      </div>
    </div>
  </div>
  );
};

export default MutualSupportGuide;
