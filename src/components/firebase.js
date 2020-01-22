import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCNv41PvQcBDYqKQwuLqsT4MLTF1AFtbAE",
  authDomain: "react-blog-template-83866.firebaseapp.com",
  databaseURL: "https://react-blog-template-83866.firebaseio.com",
  projectId: "react-blog-template-83866",
  storageBucket: "react-blog-template-83866.appspot.com",
  messagingSenderId: "169684654016",
  appId: "1:169684654016:web:343e0f672241a60e34da25",
  measurementId: "G-NKP74W03YJ"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export default firebase