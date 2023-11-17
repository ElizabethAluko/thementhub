import React, { useState } from 'react';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();
  
  const handleLogin = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('password', password);

      // Send a POST request to your server for authentication
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        body: formData,
	headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      
      if (response.status === 200) {
      // Authentication successful
        const userData = await response.json();
        auth.login(userData); // login function in the useAuth file
	alert(`Login Successfull, ${userData.user}!`);
	navigate('/dashboard');
	onSuccess();
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
