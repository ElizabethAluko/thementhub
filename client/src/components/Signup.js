import React, { useState } from 'react';

const Signup = ({ onSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [jobOrCourseTitle, setjobOrCourseTitle] = useState('');

  const url = 'https://thementhub-lc6w.onrender.com';

const handleSignup = async (event) => {
  event.preventDefault();
  // Implement your signup logic here
  const newUser = {
    firstName,
    lastName,
    email,
    password,
    role,
    jobOrCourseTitle,
  };

  // Add any additional validation logic here
  if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password || !newUser.role || !newUser.jobOrCourseTitle) {
    // Handle incomplete user data, display an error message, or prevent submission
    console.log('Incomplete user data');
    alert('Please, Fill all Fields');
    return;
  }

  // You can also add more specific validation rules (e.g., password strength, email format) here

  // Send the user data to the server for registration
  try {
    const response = await fetch(url + '/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      // Registration successful - you can navigate the user to a login page or display a success message
      console.log('Registration successful. Please login.');
      alert('Registration Successful, Please Login');
      onSuccess();
      // props.history.push('/login')
    } else {
      // Handle registration error and display an error message
      const data = await response.json();
      console.log('Registration error:', data.error);
      alert('User already Exist');
    }
  } catch (error) {
    // Handle network errors or other issues
    alert('Registration failed:', error);
  }
};

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Signup</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full p-2 mb-2 border rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded-md"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 mb-2 border rounded-md"
      >
        <option value="">Select your role</option>
        <option value="mentor">Mentor</option>
        <option value="mentee">Mentee</option>
        <option value="both">Both</option>
        <option value="none">None</option>
      </select>
      <input
        type="text"
        placeholder="Job or course Title"
        value={jobOrCourseTitle}
        onChange={(e) => setjobOrCourseTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <button
        onClick={handleSignup}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
