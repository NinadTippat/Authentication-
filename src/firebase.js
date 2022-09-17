import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0As-I4EgbH-KSzOiQBOIJVtl9Ve_lTMM",
  authDomain: "auth-redux-90e56.firebaseapp.com",
  projectId: "auth-redux-90e56",
  storageBucket: "auth-redux-90e56.appspot.com",
  messagingSenderId: "921422956019",
  appId: "1:921422956019:web:bda55807a09c7e14b8fe86",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
