// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDz7uwXRr9vNbOdp11RgDrAI46Es0UlRlw',
  authDomain: 'docs-9fd44.firebaseapp.com',
  projectId: 'docs-9fd44',
  storageBucket: 'docs-9fd44.appspot.com',
  messagingSenderId: '202668640867',
  appId: '1:202668640867:web:1cac707ca155b01e490656',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
