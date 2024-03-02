// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';
import { getFirebase } from 'firebase/firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDbqwyGu443YhO5_uvY_CTJlH2cWRI2n_w',
  authDomain: 'chatbot-9ba3c.firebaseapp.com',
  projectId: 'chatbot-9ba3c',
  storageBucket: 'chatbot-9ba3c.appspot.com',
  messagingSenderId: '699907805034',
  appId: '1:699907805034:web:457c3b3f4e50a7e8339f13',
  measurementId: 'G-8SMJ81CT7D'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirebase(app);
