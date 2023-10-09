import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBeg1AO9tIChsyqvk8B2wPCjOZemQsaPY",
  authDomain: "whatsapp-clone-e496c.firebaseapp.com",
  projectId: "whatsapp-clone-e496c",
  storageBucket: "whatsapp-clone-e496c.appspot.com",
  messagingSenderId: "35835443989",
  appId: "1:35835443989:web:411d4b78c378f791de071c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)