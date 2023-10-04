import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBf9h03yCq2hKa6BZ5ayBbdzj3p-1Rr1NQ',
  authDomain: 'task-ab451.firebaseapp.com',
  projectId: 'task-ab451',
  storageBucket: 'task-ab451.appspot.com',
  messagingSenderId: '697718451204',
  appId: '1:697718451204:web:1f3a3cb498ed227e521951',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
