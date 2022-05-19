import Head from 'next/head';
import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './api/firebase-config';

const provider = new GoogleAuthProvider();

export default function Home() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      <Head>
        <title>next-firebase-google-auth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {user ? <p>Hello, {user.displayName}</p> : null}
      {user ?
        <button onClick={() => signOut(auth)}>Sign Out</button> :
        <button onClick={() => signInWithPopup(auth, provider)}>Sign in with popup</button>}

    </div>
  );
}
