import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUuxumyPEgtPEjuTXkFd_LP7e6x1EfGYQ",
  authDomain: "netninja-vue-projects.firebaseapp.com",
  projectId: "netninja-vue-projects",
  storageBucket: "netninja-vue-projects.appspot.com",
  messagingSenderId: "14958471113",
  appId: "1:14958471113:web:2a48b721bdbc27935faa18",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth(); //for login
const projectFirestore = firebase.firestore(); //for BaaS
const timestamp = firebase.firestore.FieldValue.serverTimestamp; //for timestamping events

export { projectFirestore, timestamp, projectAuth };
