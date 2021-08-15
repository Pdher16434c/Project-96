var firebaseConfig = {
    apiKey: "AIzaSyALlebPOx0MNF1qOaEo7nqTyFwMnVhuFIo",
    authDomain: "kwiter-33835.firebaseapp.com",
    databaseURL: "https://kwiter-33835-default-rtdb.firebaseio.com",
    projectId: "kwiter-33835",
    storageBucket: "kwiter-33835.appspot.com",
    messagingSenderId: "378564276438",
    appId: "1:378564276438:web:282a44f067ca36b542d977"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }