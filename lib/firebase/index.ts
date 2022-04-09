import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  signInWithRedirect,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0g6MWpu9296YnzhuaJDaQ7sGTvj2igNo',
  authDomain: 'doc-dev-9f330.firebaseapp.com',
  projectId: 'doc-dev-9f330',
  storageBucket: 'doc-dev-9f330.appspot.com',
  messagingSenderId: '960879673571',
  appId: '1:960879673571:web:66cb184560d627671e45d6',
  // apiKey: process.env.FIREBASE_APIKEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
