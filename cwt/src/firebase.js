import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKWHycK2dX5Wemo3QtyqEFL92I0Zy0UxQ",
  authDomain: "connectwithtech-e1431.firebaseapp.com",
  projectId: "connectwithtech-e1431",
  storageBucket: "connectwithtech-e1431.appspot.com",
  messagingSenderId: "830803308401",
  appId: "1:830803308401:web:da8c40212942314a51d0d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()