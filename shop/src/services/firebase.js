import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBNhUQTdOtHMKlt9i8cI-44zRNzvjkBtLY",
  authDomain: "signature-database.firebaseapp.com",
  databaseURL: "https://signature-database.firebaseio.com",
  projectId: "signature-database",
  storageBucket: "signature-database.appspot.com",
  messagingSenderId: "1088125358304"
}

const FirebaseService = firebase.initializeApp(firebaseConfig);

export default FirebaseService;
