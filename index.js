// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
 apiKey: "AIzaSyCjRCnl-0ohz1MahXwZ7pnYNU0oaUWqgaA",
  authDomain: "grocerylist-290a6.firebaseapp.com",
  databaseURL: "https://grocerylist-290a6.firebaseio.com",
  projectId: "grocerylist-290a6",
  storageBucket: "grocerylist-290a6.appspot.com",
  messagingSenderId: "341204536159",
  appId: "1:341204536159:web:1b8576bf2ccfed115384ea",
  measurementId: "G-PS1ZDC8DKG"
};

firebase.initializeApp(firebaseConfig);



// Save the list to database
$("#save").click(function(){
  firebase.firestore().collection("myList").add({
    item: "try it"
  });
  console.log("save it");
});
