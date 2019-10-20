(function() {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAJ8Ous2dtifXI_8GKj3YuLjfiyYH6ZVv4",
    authDomain: "hackcbs-fire.firebaseapp.com",
    databaseURL: "https://hackcbs-fire.firebaseio.com",
    projectId: "hackcbs-fire",
    storageBucket: "hackcbs-fire.appspot.com",
    messagingSenderId: "376161857918",
    appId: "1:376161857918:web:acc6d4ec96f3fe0e4a832f",
    measurementId: "G-Y2QGP90V18"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  const dbRefObject = firebase.database().ref().child('object');

  dbRefObject.on('value', snap => console.log(snap.val()));

  firebase.analytics();
}());