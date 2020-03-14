import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDC69z8-2J_dxTp8mg_ZXFsqDIbdUZpLfM",
  authDomain: "project-plan-8bc27.firebaseapp.com",
  databaseURL: "https://project-plan-8bc27.firebaseio.com",
  projectId: "project-plan-8bc27",
  storageBucket: "project-plan-8bc27.appspot.com",
  messagingSenderId: "54471600318",
  appId: "1:54471600318:web:5598287eeefe50e70716ef",
  measurementId: "G-YM6HR4CEPT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;