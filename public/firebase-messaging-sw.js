
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');



const firebaseConfig = {
    apiKey: "AIzaSyD-SBZGN-ciq-qZ-26S-x9gjceCUvuQucY",
    authDomain: "exxpensenotifications.firebaseapp.com",
    databaseURL: "https://exxpensenotifications.firebaseio.com",
    projectId: "exxpensenotifications",
    storageBucket: "exxpensenotifications.appspot.com",
    messagingSenderId: "806068638164",
    appId: "1:806068638164:web:8e17db57842f2dcaf24641"
  };





  firebase.initializeApp(firebaseConfig)
  const messaging=firebase.messaging()