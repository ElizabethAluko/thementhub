import React, { useState } from 'react';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const openSuccessModal = () => {setSuccessModalOpen(true);};
  const closeSuccessModal = () => {setSuccessModalOpen(false);};

  const navigate = useNavigate();
  const auth = useAuth();
  
  const handleLogin = async () => {
    try {
      const logindata = {email, password,};

      // Send a POST request to your server for authentication
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        body: JSON.stringify(logindata),
	headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status === 200) {
      // Authentication successful
        const userData = await response.json();
        auth.login(userData);
        // onSuccess();
	
    	openSuccessModal();
	// navigate('/dashboard');
	setTimeout(() => {
    	  navigate('/dashboard');
  	}, 2000);
      } else {
        // Authentication failed
	alert('Login Failed');
        console.error('Authentication failed');
      }
     // Handle any network or other errors here
    } catch (error) {
        alert('Error during login');
        console.error('Error during login:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">

	{isSuccessModalOpen && (
	  <Modal isOpen={isSuccessModalOpen} onClose={closeSuccessModal}>
	    {/* Success component here */}
	  <div className="bg-white rounded-lg p-4 w-full sm:w-full lg:w-full h-full">
      	    <h2 className="text-2xl font-semibold text-green-500 mb-2">Login Successful!</h2>
            <div className="text-gray-600">You have successfully logged in.</div>
          </div>  
	</Modal>
	  )}

      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <div className="flex justify-between items-center">
        <a href="#" className="text-blue-500 text-sm">Forgot Password</a>
        <a href="#" className="text-blue-500 text-sm">Terms & Conditions</a>
      </div>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
