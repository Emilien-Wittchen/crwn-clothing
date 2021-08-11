import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBVDYc-nd2Gw2xgM97LFmjQuFkkRKGIrWg',
  authDomain: 'crwn-clothing-86867.firebaseapp.com',
  projectId: 'crwn-clothing-86867',
  storageBucket: 'crwn-clothing-86867.appspot.com',
  messagingSenderId: '638019281608',
  appId: '1:638019281608:web:3c03e53fbc17b446d7fbfd',
  measurementId: 'G-LSRS4E1MPV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
