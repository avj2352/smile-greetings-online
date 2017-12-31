import firebase from 'firebase';

//
const config = {
    apiKey: "AIzaSyBy_INLwDIQ56x5SLSf2-X-GyCySdkCKE4",
    authDomain: "smile-greetings-online.firebaseapp.com",
    databaseURL: "https://smile-greetings-online.firebaseio.com",
    projectId: "smile-greetings-online",
    storageBucket: "smile-greetings-online.appspot.com",
    messagingSenderId: "1058240802610"
  };

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;