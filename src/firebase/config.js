import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6SrqDQC83OFtXwlEqGXUjVqp7u1mI3xg",
  authDomain: "ricechat29.firebaseapp.com",
  databaseURL: "https://ricechat29.firebaseio.com",
  projectId: "ricechat29",
  storageBucket: "ricechat29.appspot.com",
  messagingSenderId: "515902041983",
  appId: "1:515902041983:web:c3a75a6c9ba0dd8a"
};

const fireApp =firebase.initializeApp(firebaseConfig);

export default fireApp;