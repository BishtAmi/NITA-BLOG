import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyCEoqr8SF4jkZW1JP7SsVghPy1u8zasOxs",
  authDomain: "ami-blog.firebaseapp.com",
  databaseURL: "https://ami-blog-default-rtdb.firebaseio.com",
  projectId: "ami-blog",
  storageBucket: "ami-blog.appspot.com",
  messagingSenderId: "75153799371",
  appId: "1:75153799371:web:72c48c79b24d706c4f034e",
  measurementId: "G-CE2K4406J0",
};
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
