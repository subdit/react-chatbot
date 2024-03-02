import React from 'react';
import NavBar from './components/NavBar';
import { userAuthState } from 'react-firebase-hooks/auth';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <NavBar />
      <Welcome />
    </div>
  );
}

export default App;
