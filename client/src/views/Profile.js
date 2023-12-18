import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useAuth } from '../components/useAuth';
import Modal from '../components/Modal';
import Login from '../components/Login';

const UserProfile = () => {
  const initialUserDetails = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    role: ['Developer'],
    jobOrCourseTitle: 'Software Engineer',
    academicLevel: 'Master',
    ageRange: '25-34',
    availableTime: 'Full-time',
    country: 'United States',
    profilePicture: 'https://placekitten.com/150/150',
    description: {
      bio: 'Passionate software engineer with a love for coding.',
      website: 'https://www.johndoe.com',
      socialLinks: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        linkedIn: 'https://www.linkedin.com/in/johndoe',
      },
    },
  };
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const [isEditing, setEditing] = useState(false);

  const { user, logout }= useAuth();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {setLoginModalOpen(true);};

  const handleInputChange = (field, value) => {
    setUserDetails({
      ...userDetails,
      [field]: value,
    });
  };

  const handleSocialLinkChange = (platform, value) => {
    setUserDetails({
      ...userDetails,
      description: {
        ...userDetails.description,
        socialLinks: {
          ...userDetails.description.socialLinks,
          [platform]: value,
        },
      },
    });
  };
  
  const handleSave = () => {
    // Implement save logic (e.g., send data to the server)
    setEditing(false);
    // Additional logic to save the changes
  };


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
         <h1 className="text-4xl font-bold mb-4">Your Profile Page</h1>
         <p className="text-yellow-400">Welcome {user.firstName}!</p>
       </div>

      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <div className="text-center">
          <img
            src="https://placekitten.com/150/150" // Replace with the user's profile picture URL
            alt="Profile"
            className="mx-auto w-16 h-16 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-500">Web Developer</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="flex items-center space-x-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5l1 7h6l-5 3 2 7-5-3-5 3 2-7-5-3h6l1-7z"
              />
            </svg>
            <span>john.doe@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>(123) 456-7890</span>
          </div>
        </div>
      </div>

  <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <div className="text-center">
          <img
            src={userDetails.profilePicture}
            alt="Profile"
            className="mx-auto w-16 h-16 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">
            {userDetails.firstName} {userDetails.lastName}
          </h2>
          <p className="text-gray-500">{userDetails.role.join(', ')}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
          

          <form>
  <div className="mb-4">
    <label htmlFor="firstName" className="block text-gray-600 font-semibold mb-2">
      First Name
    </label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={userDetails.firstName}
      onChange={(e) => handleInputChange('firstName', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="lastName" className="block text-gray-600 font-semibold mb-2">
      Last Name
    </label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={userDetails.lastName}
      onChange={(e) => handleInputChange('lastName', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={userDetails.email}
      onChange={(e) => handleInputChange('email', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

    <div className="mb-4">
    <label htmlFor="jobOrCourseTitle" className="block text-gray-600 font-semibold mb-2">
      Job or Course Title
    </label>
    <input
      type="text"
      id="jobOrCourseTitle"
      name="jobOrCourseTitle"
      value={userDetails.jobOrCourseTitle}
      onChange={(e) => handleInputChange('jobOrCourseTitle', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="academicLevel" className="block text-gray-600 font-semibold mb-2">
      Academic Level
    </label>
    <input
      type="text"
      id="academicLevel"
      name="academicLevel"
      value={userDetails.academicLevel}
      onChange={(e) => handleInputChange('academicLevel', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="ageRange" className="block text-gray-600 font-semibold mb-2">
      Age Range
    </label>
    <input
      type="text"
      id="ageRange"
      name="ageRange"
      value={userDetails.ageRange}
      onChange={(e) => handleInputChange('ageRange', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="availableTime" className="block text-gray-600 font-semibold mb-2">
      Available Time
    </label>
    <input
      type="text"
      id="availableTime"
      name="availableTime"
      value={userDetails.availableTime}
      onChange={(e) => handleInputChange('availableTime', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="country" className="block text-gray-600 font-semibold mb-2">
      Country
    </label>
    <input
      type="text"
      id="country"
      name="country"
      value={userDetails.country}
      onChange={(e) => handleInputChange('country', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="bio" className="block text-gray-600 font-semibold mb-2">
      Bio
    </label>
    <textarea
      id="bio"
      name="bio"
      value={userDetails.description.bio}
      onChange={(e) => handleInputChange('description', { ...userDetails.description, bio: e.target.value })}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="website" className="block text-gray-600 font-semibold mb-2">
      Website
    </label>
    <input
      type="text"
      id="website"
      name="website"
      value={userDetails.description.website}
      onChange={(e) => handleInputChange('description', { ...userDetails.description, website: e.target.value })}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="facebook" className="block text-gray-600 font-semibold mb-2">
      Facebook
    </label>
    <input
      type="text"
      id="facebook"
      name="facebook"
      value={userDetails.description.socialLinks.facebook}
      onChange={(e) => handleSocialLinkChange('facebook', e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="twitter" className="block text-gray-600 font-semibold mb-2">
      Twitter
    </label>
    <input
      type="text"
      id="twitter"
      name="twitter"
      value={userDetails.description.socialLinks.twitter}
      onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="linkedIn" className="block text-gray-600 font-semibold mb-2">
      LinkedIn
    </label>
    <input
      type="text"
      id="linkedIn"
      name="linkedIn"
      value={userDetails.description.socialLinks.linkedIn}
      onChange={(e) => handleSocialLinkChange('linkedIn', e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      disabled={!isEditing}
    />
  </div>


  {/* Add similar input fields for other user details (email, role, etc.) */}
  {/* ... */}

  <div className="flex justify-end mt-6">
    {isEditing ? (
      <button
        type="button"
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    ) : (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Edit
      </button>
    )}
  </div>
</form>

        </div>
      </div>
    </div>

  </div>
  );
};

export default UserProfile;
