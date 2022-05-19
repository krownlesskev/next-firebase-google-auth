import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0HgEDXy747V6tf2kEqc95qRZRNnwI5-I",
  authDomain: "next-firebase--auth.firebaseapp.com",
  projectId: "next-firebase--auth",
  storageBucket: "next-firebase--auth.appspot.com",
  messagingSenderId: "74255376130",
  appId: "1:74255376130:web:33df4fa8fa456eea25ec1b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);