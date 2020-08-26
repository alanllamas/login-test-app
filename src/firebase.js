import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


const firebaseConfig = {
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
