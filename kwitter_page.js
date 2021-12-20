var firebaseConfig = {
        apiKey: "AIzaSyDpZEcsGQ-hU-qPEYy8DEoakKTMyx8kFNg",
        authDomain: "minsta-7124d.firebaseapp.com",
        databaseURL: "https://minsta-7124d-default-rtdb.firebaseio.com",
        projectId: "minsta-7124d",
        storageBucket: "minsta-7124d.appspot.com",
        messagingSenderId: "806050775344",
        appId: "1:806050775344:web:7e62bdebfd83dffee808f5",
        measurementId: "G-1J7L9TC5B2"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS HERE
  
  function logout(){
    window.location = "index.html"
    localStorage.removeItem("Username")
    localStorage.removeItem("roomname")
  
  }
  
  user_name = localStorage.getItem("Username")
  room_name = localStorage.getItem("roomname")
  
  function send() {
    msg = document.getElementById("message").value
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,like:0
    })
    document.getElementById("message").innerHTML = ""
  }
  
  
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
  name =message_data['name']
  message = message_data['message']
  like= message_data['like']
   namewithtag = "<h4> " + name + "</h4>" + "<img src='tick.png' class='user_tick'>" 
   messagewithtag = "<h4 class='message_h4'>" + message + "</h4>" 
   likebutton = "<button onclick='updatelike(this.id)' class='btn btn-warning' id="+firebase_message_id+" value="+like+">"
   spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+" </span> </button> <hr>";
   row= namewithtag + messagewithtag + likebutton + spanwithtag 
   document.getElementById("output").innerHTML +=row;
   //End code
        } });  }); }
  getData();

  function updatelike() {
    buttonid = firebase_message_id
    likes = document.getElementById(buttonid).value
    update_likes = Number(likes) + 1
    firebase.database().ref(room_name).child(firebase_message_id).update({
      like:update_likes
    })
  }

