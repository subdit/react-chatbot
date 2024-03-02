import React from 'react';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <main className='welcome'>
      <h2>Welcome to Chatbot </h2>
      <img src='/logo512.png' alt='ReactJs Logo' width={50} height={50} />
      <p>Sign In with Google to Chat with your fellow React Developers.</p>
      <button className='sign-in'>
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt='sign in with Google'
          type='button'
        />
      </button>
    </main>
  );
};

export default Welcome;
