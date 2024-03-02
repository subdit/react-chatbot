import React from 'react';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web';
import { auth } from '../firebase';
import { userAuthState } from 'react-firebase-hooks';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const NavBar = () => {
  const [user] = userAuthState(auth);
  const googleSignin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider);
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
