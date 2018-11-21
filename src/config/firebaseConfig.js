import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyB55FSuhAXIS7VQRtxOZprHAnIq14wGZlI",
    authDomain: "agileoptics-72882.firebaseapp.com",
    databaseURL: "https://agileoptics-72882.firebaseio.com",
    projectId: "agileoptics-72882",
    storageBucket: "",
    messagingSenderId: "641538800123"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;