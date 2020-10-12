import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDLqRDJj0ZM7uRI9Xqz-kdH_-qVv7fp9kU',
  authDomain: 'crwn-db-bb2f5.firebaseapp.com',
  databaseURL: 'https://crwn-db-bb2f5.firebaseio.com',
  projectId: 'crwn-db-bb2f5',
  storageBucket: 'crwn-db-bb2f5.appspot.com',
  messagingSenderId: '702908580814',
  appId: '1:702908580814:web:61122025b455ed268a619f',
  measurementId: 'G-0ZQQWF9FSY',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //async making an API request
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
