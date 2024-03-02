import React from 'react';
import { auth } from './firebase';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ChatBox from './components/ChatBox';
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from './components/Footer';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
