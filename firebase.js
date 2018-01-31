
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcC6vJNhvOI0bIGV8MvJECAmimkKXTeSo",
    authDomain: "fichesrpg.firebaseapp.com",
    databaseURL: "https://fichesrpg.firebaseio.com",
    projectId: "fichesrpg",
    storageBucket: "fichesrpg.appspot.com",
    messagingSenderId: "320656969175"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;