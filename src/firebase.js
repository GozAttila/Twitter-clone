import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqLKf7gy82P26sqfDtCeh9AMPUiEzF5w0",
    authDomain: "twitter-clone-928a2.firebaseapp.com",
    databaseURL: "https://twitter-clone-928a2.firebaseio.com",
    projectId: "twitter-clone-928a2",
    storageBucket: "twitter-clone-928a2.appspot.com",
    messagingSenderId: "308890625861",
    appId: "1:308890625861:web:cb7a4eadf212db4dd5c02c",
    measurementId: "G-39MLD1RY6Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db
