import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyD67G_w4UMaC9a6Zc51_FqI4MKU6PgtYRg",
  authDomain: "bartersystem-9ad40.firebaseapp.com",
  databaseURL: "https://bartersystem-9ad40.firebaseio.com",
  projectId: "bartersystem-9ad40",
  storageBucket: "bartersystem-9ad40.appspot.com",
  messagingSenderId: "373848553454",
  appId: "1:373848553454:web:decc14c75d835606a180ff",
  measurementId: "G-E9TE6HRQWC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();