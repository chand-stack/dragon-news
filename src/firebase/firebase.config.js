import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCPmHfBD0K07qeeCht3O3lQBUDtZcs6xm4",
  authDomain: "dragon-news-b37e2.firebaseapp.com",
  projectId: "dragon-news-b37e2",
  storageBucket: "dragon-news-b37e2.appspot.com",
  messagingSenderId: "914399061228",
  appId: "1:914399061228:web:830a8c6b6d8164dfedf1c9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth