
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider,TwitterAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDqSPdWBobtth82LFDoMKcH7v87MkIu3O4",
  authDomain: "agrifood-5e639.firebaseapp.com",
  projectId: "agrifood-5e639",
  storageBucket: "agrifood-5e639.appspot.com",
  messagingSenderId: "839246802463",
  appId: "1:839246802463:web:e8a8bec1881e1da051af2a"
};


  initializeApp(firebaseConfig);

 export const auth = getAuth()
 export const google = new GoogleAuthProvider()
 export const facebook = new FacebookAuthProvider()
 export const twitter = new TwitterAuthProvider()