import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJBh916dbvFuxtBWhqRzwCzwP7Wk1bqlo",
    authDomain: "clone-b7bc3.firebaseapp.com",
    databaseURL: "https://clone-b7bc3.firebaseio.com",
    projectId: "clone-b7bc3",
    storageBucket: "clone-b7bc3.appspot.com",
    messagingSenderId: "561873638684",
    appId: "1:561873638684:web:800993529d4a85f5be96d9",
    measurementId: "G-V8T4HD7Q87"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export {auth}