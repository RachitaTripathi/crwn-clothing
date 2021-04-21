import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBAj5yIj5y1fZtBgFtyFy0Ej9PndEmMUxA",
  authDomain: "crwn-db-92983.firebaseapp.com",
  projectId: "crwn-db-92983",
  storageBucket: "crwn-db-92983.appspot.com",
  messagingSenderId: "915629489556",
  appId: "1:915629489556:web:d3a687bbcffe4bb34c6381",
  measurementId: "G-BCPT45828T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;