import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCLVJzGvmRt5M1a_PxcXoziz4YsJUKttNg",
  authDomain: "tiktok-ea81f.firebaseapp.com",
  databaseURL: "https://tiktok-ea81f.firebaseio.com",
  projectId: "tiktok-ea81f",
  storageBucket: "tiktok-ea81f.appspot.com",
  messagingSenderId: "986077742216",
  appId: "1:986077742216:web:d77f8b4719342d6aaf4b3d",
  measurementId: "G-1BZZD6SCCZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };