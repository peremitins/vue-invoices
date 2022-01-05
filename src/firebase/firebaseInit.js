import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6Je9dxnMyYfwrXIQW6Pr7notgrKgbzmk",
  authDomain: "invoice-app-bb457.firebaseapp.com",
  projectId: "invoice-app-bb457",
  storageBucket: "invoice-app-bb457.appspot.com",
  messagingSenderId: "432676891397",
  appId: "1:432676891397:web:ef0090b435240d81a9e56c"
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);
