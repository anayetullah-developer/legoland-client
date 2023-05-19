// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR_NHQpPkPTMWh7F_-vgKSoIRlTSo0xNM",
  authDomain: "legoland-market.firebaseapp.com",
  projectId: "legoland-market",
  storageBucket: "legoland-market.appspot.com",
  messagingSenderId: "938226546312",
  appId: "1:938226546312:web:335ea687d7fd4ec5a8113d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;