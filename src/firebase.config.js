// Import the functions you need from the SDKs you need
import { getApp, getApps,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBnQStGjr4WJ6Ky4jhFYctF6iHLcAsJ40",
    authDomain: "restaurantapp-92f84.firebaseapp.com",
    databaseURL: "https://restaurantapp-92f84-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-92f84",
    storageBucket: "restaurantapp-92f84.appspot.com",
    messagingSenderId: "278812806194",
    appId: "1:278812806194:web:04078649e9fded85d8802b"
  };
  // Initialize Firebase
  const app= getApp.length> 0 ? getApp():initializeApp(firebaseConfig);
  const firestore= getFirestore(app)
  const storage=getStorage(app)

  export {app, firestore, storage}