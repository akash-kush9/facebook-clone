import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDkEhNZp207MYBW_1Hfo_wf8joSNU2waiQ",
  authDomain: "facebook-clone-60c16.firebaseapp.com",
  databaseURL: "https://facebook-clone-60c16.firebaseio.com",
  projectId: "facebook-clone-60c16",
  storageBucket: "facebook-clone-60c16.appspot.com",
  messagingSenderId: "895714749973",
  appId: "1:895714749973:web:c9e79cdcd3cf6f7100a81c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const emailProvider = new firebase.auth.EmailAuthProvider();
export { auth, googleProvider, emailProvider };
export default db;
