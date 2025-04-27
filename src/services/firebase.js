import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBNBoCmyXL5_V8P3G-xLXxynxnNxBeBLb0",
  authDomain: "livostar-355d0.firebaseapp.com",
  projectId: "livostar-355d0",
  storageBucket: "livostar-355d0.appspot.com",
  messagingSenderId: "334148943552",
  appId: "1:334148943552:web:d3ab7362ded602f3753725",
  measurementId: "G-YS0W33MBXE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
