import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXo537YoDOkODIPO4O93FvRe-Xoo2tNLY",
  authDomain: "inventory-mgmt-68059.firebaseapp.com",
  projectId: "inventory-mgmt-68059",
  storageBucket: "inventory-mgmt-68059.appspot.com",
  messagingSenderId: "904286308099",
  appId: "1:904286308099:web:762eed4617fb14b9b90b36",
  measurementId: "G-R0NZM2RB1D",
};

firebase.initializeApp(firebaseConfig);

export const firestoreRef = firebase.firestore();

export default firebase;
