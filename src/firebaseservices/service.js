import firebase from 'firebase'






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




export default function generateNotification() {
    console.log('Requesting permission...');
    // [START request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        messaging.getToken().then((currentToken) => {
           console.log(currentToken)
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
           
          });
          
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
    // [END request_permission]
  }