import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// Reducers
// @todo

const firebaseConfig = {
  apiKey: 'AIzaSyDLjLcwOkI1x8w5rQtqoUxke18w1Q8ip2I',
  authDomain: 'react-42281.firebaseapp.com',
  databaseURL: 'https://react-42281.firebaseio.com',
  projectId: 'react-42281',
  storageBucket: 'react-42281.appspot.com',
  messagingSenderId: '477199073912'
};

// react-redux firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firsebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
