import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB67526qgOtc3XztcnkmTdscqFA7Crzndw",
    authDomain: "jfgjrt-2c28a.firebaseapp.com",
    projectId: "jfgjrt-2c28a",
    storageBucket: "jfgjrt-2c28a.appspot.com",
    messagingSenderId: "274318629750",
    appId: "1:274318629750:web:7006752627f29b10663857",
    measurementId: "G-28BZDQJZT2"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();