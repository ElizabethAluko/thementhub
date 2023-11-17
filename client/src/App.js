// client/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import { AuthProvider } from './components/useAuth';
// import Modal from './components/Modal';
import About from './views/About';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import BecomeMentor from './views/BecomeMentor';
import BeMentored from './views/BeMentored';
import SelfHelp from './views/SelfHelp';
import MutualSupport from './views/MutualSupport';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  const [tasks, setTasks] = useState([]);

  // Establish the Socket.io connection
  const socket = io('http://localhost:5000/');

  useEffect(() => {
    // Clean up the connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);


  return (
   <AuthProvider>
    <TawkMessengerReact
      propertyId="6557f23891e5c13bb5b12576"
      widgetId="1hffokbtt"/>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
	  <Route path="/dashboard" element={<Dashboard />} />
	  <Route path="/Mentor" element={<BecomeMentor />} />
	  <Route path="/Mentored" element={<BeMentored />} />
	  <Route path="/SelfHelp" element={<SelfHelp />} />
	  <Route path="/MutualSupport" element={<MutualSupport />} />
	  <Route path="/about" element={<About />} />
        </Routes>
	<Footer />
      </div>
    </Router>
   </AuthProvider>
  );
}

export default App;
