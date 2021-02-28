import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBe11VVLYqXj7HoYhThG3hfLQt0cdtzoQA",
    authDomain: "restaurants-e3056.firebaseapp.com",
    projectId: "restaurants-e3056",
    storageBucket: "restaurants-e3056.appspot.com",
    messagingSenderId: "404477946816",
    appId: "1:404477946816:web:1218a88be5e910f3d0b625"
}
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)