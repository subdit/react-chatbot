import React from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ChatBox from './components/ChatBox';

import Footer from './components/Footer';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
