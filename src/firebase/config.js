import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSR8uoc8eu5TuusG_hQU8_b0F8TlvrfIk",
  authDomain: "e-books-macarena-leiva.firebaseapp.com",
  projectId: "e-books-macarena-leiva",
  storageBucket: "e-books-macarena-leiva.appspot.com",
  messagingSenderId: "492871527691",
  appId: "1:492871527691:web:39c31c8da766005f25c60e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const getFirestore = () => {
    return firebase.firestore(app)
}
