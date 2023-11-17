// client/src/views/Home.js
import React, { useState } from 'react';
import video from './bgdVideo.mp4';
import Modal from '../components/Modal';
import FeatureBox from '../components/FeatureBox';
import Quotes from '../components/Quotes';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Team from '../components/Team';
import Navigation from '../components/Navigation';


function Home() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {setLoginModalOpen(true);};
  const closeLoginModal = () => {setLoginModalOpen(false);};

  const openSignupModal = () => {setSignupModalOpen(true);};
  const closeSignupModal = () => {setSignupModalOpen(false);};
 

  return (
    <div>
      {/* Navigation Bar */}
      <Navigation openLoginModal={openLoginModal} />

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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl text-white font-bold mb-2">Together...</h1>
        <p className="text-md text-yellow-400">We can Reach the Goal!</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-700" onClick={openSignupModal}>
            Start for Free
          </button>
        </div>
      </div>

      {/* Conditionally render the login form */}
	{isLoginModalOpen && (
          <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
	  {/* LoginForm component here */}
	    <Login onSuccess={closeLoginModal} />
	 </Modal>
	 )}
	
	{/* Conditionally render the Signup form */}
	{isSignupModalOpen && (
	  <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
           {/* SignupForm component here */}
           <Signup onSuccess={closeSignupModal} />
          </Modal>
	)}
<br />
	
<h1 className="font-bold text-2xl text-center mt-8 mb-5 mx-4"> Become what you will be happy you become.</h1>


    <FeatureBox
        image="/images/success.png"
        title="Mentorship"
        description="Remember those who guided you on your path? Now is your chance to pay it forward. By becoming a mentor, you continue a chain of support that uplifts individuals and communities."
        linkHref="/Mentor" // Link 1
        swapPositionsOnLargeScreen={true}
      /><br /><br /><br />
    <FeatureBox
        image="/images/men.jpg"
        title="Mutual Suport"
        description="You're never alone on this journey. Connect with like-minded individuals who understand your struggles and aspirations. Together, we foster a community built on trust and support."
        linkHref="/MutualSupport" // Link 2
        swapPositionsOnLargeScreen={false}
      /><br /><br /><br />
    <FeatureBox
        image="/images/office.png"
        title="Self Help"
        description="Harness the power within you. We equip you with the knowledge and tools needed for self-improvement, so you can take charge of your life and thrive."
        linkHref="SelfHelp" // Link 3
        swapPositionsOnLargeScreen={true}
      /><br /><br /><br />

    <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-8 text-center text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
	<h1 className="text-4xl font-bold mb-4">
	  Thrive Together: <span className="text-yellow-400">Mentor! Be Mentored!</span>
      </h1>
      <p className="text-2xl">Support and Empower!</p>
   </div>
<br /><br /><br />
      <FeatureBox
	  image="/images/flower.png"
	  title="Join us For Free!"
	  description="Join us for mentorship, goal-setting, and community support, where every journey leads to greatness. Stay accountable and achieve your goals.You will be happy you do."
	  linkHref="#"
	  swapPositionsOnLargeScreen={true}
      />
	  <br /><br /><br />

      <Quotes /> <br /><br />
      <Team /><br /><br />
	
    </div>
  );
}

export default Home;
