import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHWY_a0nyIQwz_83IZZK24s6JWRv1foI8",
  authDomain: "tech-ecommerce-2f660.firebaseapp.com",
  projectId: "tech-ecommerce-2f660",
  storageBucket: "tech-ecommerce-2f660.appspot.com",
  messagingSenderId: "1059721108561",
  appId: "1:1059721108561:web:dcb505b7627bc7d3936c70",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//provider for customizing the parameters for auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//pass auth and provider to the popup sign in
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
