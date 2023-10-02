// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "todonotes-2055d.firebaseapp.com",
  projectId: "todonotes-2055d",
  storageBucket: "todonotes-2055d.appspot.com",
  messagingSenderId: "1014676448649",
  appId: "1:1014676448649:web:b00e2d6ce05a8e4e32ed58",
  measurementId: "G-0ZZNVC759H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db=getFirestore(app);
// export const storage =getStorage(app);