import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC7fC0UlIcYIwV_xg9XGlO9crXZcup7qc8",
  authDomain: "todoist-clone-fb8a0.firebaseapp.com",
  databaseURL: "https://todoist-clone-fb8a0-default-rtdb.firebaseio.com",
  projectId: "todoist-clone-fb8a0",
  storageBucket: "todoist-clone-fb8a0.appspot.com",
  messagingSenderId: "325124769842",
  appId: "1:325124769842:web:c19a4f74c081da45c1942b",
});

export { firebaseConfig as firebase };
