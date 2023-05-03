// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYckkzxMyYDnG7KuQQSgtNbtCmeUQaC6o",
  authDomain: "chef-hunter-a10.firebaseapp.com",
  projectId: "chef-hunter-a10",
  storageBucket: "chef-hunter-a10.appspot.com",
  messagingSenderId: "221000420015",
  appId: "1:221000420015:web:ee8e04d9736a0438d6e25a",
  measurementId: "G-5YZZ9QT7DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;