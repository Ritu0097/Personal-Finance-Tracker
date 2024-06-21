import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,doc,setDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAOOJkUTsHxDmG5Nvo02KwoBXm5_XmgOFM",
  authDomain: "finance-tracker-4c334.firebaseapp.com",
  projectId: "finance-tracker-4c334",
  storageBucket: "finance-tracker-4c334.appspot.com",
  messagingSenderId: "623026278055",
  appId: "1:623026278055:web:d215ff44edd41287bb5582",
  measurementId: "G-X694NYWJYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export{db,auth,provider,doc,setDoc};