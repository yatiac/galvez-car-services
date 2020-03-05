import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCycM6UyXF-vXCQwRKaGEmiUIzfCa009bs",
  authDomain: "galvez-car-services.firebaseapp.com",
  databaseURL: "https://galvez-car-services.firebaseio.com",
  projectId: "galvez-car-services",
  storageBucket: "galvez-car-services.appspot.com",
  messagingSenderId: "667528243147",
  appId: "1:667528243147:web:d69d946014e09530b6784e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
