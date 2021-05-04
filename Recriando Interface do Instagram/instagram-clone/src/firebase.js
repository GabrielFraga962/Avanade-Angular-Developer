// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyC1KWCR-OPMlwS_nVQEE5tjxQmfAX9HJPU",
      authDomain: "instagram-clone-react-c989f.firebaseapp.com",
      databaseURL: "https://instagram-clone-react-c989f-default-rtdb.firebaseio.com",
      projectId: "instagram-clone-react-c989f",
      storageBucket: "instagram-clone-react-c989f.appspot.com",
      messagingSenderId: "700439583738",
      appId: "1:700439583738:web:79b982b022d0910733a243",
      measurementId: "G-QVK5G61234"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};