import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAchK3DIpJKVK9FczjkCYXmUm5A91xarvY",
  authDomain: "portfolio-kristine.firebaseapp.com",
  databaseURL: "https://portfolio-kristine.firebaseio.com",
  projectId: "portfolio-kristine",
  storageBucket: "portfolio-kristine.appspot.com",
  messagingSenderId: "359485312149",
  appId: "1:359485312149:web:4223a61cd5c47b9e3d5f9c",
  measurementId: "G-Z5BZ89MQ6M"
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export default firebase