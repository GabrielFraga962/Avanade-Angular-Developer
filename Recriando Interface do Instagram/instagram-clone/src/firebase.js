import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNKgSIefTJ3iyKmt0sFzkmJQq1wYglPJo",
    authDomain: "instagram-clone-56523.firebaseapp.com",
    projectId: "instagram-clone-56523",
    storageBucket: "instagram-clone-56523.appspot.com",
    messagingSenderId: "789622050661",
    appId: "1:789622050661:web:f3bb420031f788cc8e9b8c",
    measurementId: "G-RQYDPRCDBZ"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage };