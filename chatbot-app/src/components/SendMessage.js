import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = async event => {
  const [message, setMessage] = useState('');
  event.preventDefault();
  if (message.trim() === '') {
    alert('Enter valid message');
    return;
  }
  const { uid, displayName, photoURL } = auth.currentUser;
  await addDoc(collection(db, 'messages'), {
    text: message,
    name: displayName,
    avatar: photoURL,
    createAt: serverTimestamp(),
    uid
  });
  setMessage();

  return (
    <form onSubmit={event => SendMessage(event)} className='send-message'>
      <label htmlFor='messageInput' hidden>
        Enter Message
      </label>
      <input
        id='messageInput'
        name='messageInput'
        type='text'
        className='form-input__input'
        placeholder='type message here'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default SendMessage;
