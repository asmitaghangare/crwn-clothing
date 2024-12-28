
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANPvGxe4BHoAPL9taYYCr9ofJGr7Emzs8",
  authDomain: "crwn-db-b7245.firebaseapp.com",
  projectId: "crwn-db-b7245",
  storageBucket: "crwn-db-b7245.firebasestorage.app",
  messagingSenderId: "413483187295",
  appId: "1:413483187295:web:1ec058e79a7e90bb292fea"
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);