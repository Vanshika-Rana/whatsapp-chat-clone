import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZUhZFyWG_CrI80wLHfqHmQShzzNgPkGw",
  authDomain: "whatsapp2-48122.firebaseapp.com",
  projectId: "whatsapp2-48122",
  storageBucket: "whatsapp2-48122.appspot.com",
  messagingSenderId: "373154483291",
  appId: "1:373154483291:web:34a834e63be9437d64837e"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{db,auth,provider}