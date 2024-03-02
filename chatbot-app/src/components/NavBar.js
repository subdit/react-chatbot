import React from 'react';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GithubAuthProvider, signInWithRedirect } from 'firebase/auth';

const NavBar = () => {
  const [user] = useAuthState(auth);
  const googleSignin = () => {
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className='nav-bar'>
      <h2>Chatbot </h2>
      {user ? (
        <button onClick={signOut} className='sign-out' type='button'>
          Sign Out
        </button>
      ) : (
        <button className='sign-in'>
          <img
            onClick={googleSignin}
            src={GoogleSignin}
            alt='sign in with google'
            typeof='button'
          />
        </button>
      )}
    </nav>
  );
};
export default NavBar;
