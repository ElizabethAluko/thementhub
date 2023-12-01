// client/src/views/Home.js
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import tree from './images/tree.jpg';
import video from './bgdVideo.mp4';
import Modal from '../components/Modal';
import FeatureBox from '../components/FeatureBox';
import Quotes from '../components/Quotes';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Team from '../components/Team';
import Sidebar from '../components/Sidebar';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import TasksByStatus from '../components/TasksByStatus';
import { useAuth } from '../components/useAuth';
import Navigation from '../components/Navigation';
import io from 'socket.io-client';



function Dashboard() {
  const { user, logout, initializeAuth }= useAuth();
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  
  const socket = io('http://localhost:5000/');

  //useEffect(() => {
    //initializeAuth();
  //}, [initializeAuth]);

  // useEffect(() => {  
    if (!user) {
      // Handle user not being logged in.
      navigate('/');
      return null;
    }
  // }, [user, navigate]);

  const openLoginModal = () => {setLoginModalOpen(true);};
  const closeLoginModal = () => {setLoginModalOpen(false);};

  const openSignupModal = () => {setSignupModalOpen(true);};
  const closeSignupModal = () => {setSignupModalOpen(false);};
  
  const openTaskModal = () => {setTaskModalOpen(true);};
  const closeTaskModal = () => {setTaskModalOpen(false);};
  
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation openLoginModal={openLoginModal} user={user} logout={logout} />

      {/* Sidebar */}
      <div className="flex">
        {/* Sidebar component with user and logout handling */}
        <Sidebar user={user}>

        {/* Main content */}
        <div className="flex-grow p-4">
	   <Routes>
            <Route path="/home">Home Page</Route>
            <Route path="/profile">Profile Page</Route>
            <Route path="/tasks">Tasks Page</Route>
            <Route path="/chat">Chat Page</Route>
            <Route path="/settings">Settings Page</Route>
	  </Routes>
        </div>
	</Sidebar>
      </div>


      {/* Background Video Section */}
      <div className="relative h-full w-full">
        <video
          className="object-cover h-full w-full"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transorm -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl text-white font-bold mb-2">Together...</h1>
        <p className="text-md text-yellow-400">We can Reach the Goal!</p>
	</div>
      </div>

   <div class="w-60 h-20 bg-blue-600 rounded-r-full text-white ">
     <h1 className="text-yellow-500 text-xl pl-10 pt-2">Dashboard</h1>
     <p className="pl-6">Welcome {user.firstName}!</p>
  </div>

     <h1 className="font-bold text-blue-700 text-2xl text-center mt-8 mb-5 mx-4"> Stay Motivated </h1>
       <Quotes /><br />

     <h1 className="font-bold text-blue-700 text-2xl text-center mt-8 mb-5 mx-4">Task List</h1>
     <TaskList socket={socket} user={user} />
<br /><br /><br />

    <TasksByStatus userId={user._id} />
	
    </div>
  );
}

export default Dashboard;
