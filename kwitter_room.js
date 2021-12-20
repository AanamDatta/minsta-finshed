const firebaseConfig = {
    apiKey: "AIzaSyDpZEcsGQ-hU-qPEYy8DEoakKTMyx8kFNg",
    authDomain: "minsta-7124d.firebaseapp.com",
    projectId: "minsta-7124d",
    storageBucket: "minsta-7124d.appspot.com",
    messagingSenderId: "806050775344",
    appId: "1:806050775344:web:7e62bdebfd83dffee808f5",
    measurementId: "G-1J7L9TC5B2"
  };

  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("room_name"+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row
   //End code
   });});}
getData();
function addroom(){
RoomName= document.getElementById("roomname").value
localStorage.setItem("roomname",RoomName) 
window.location="kwitter_page.html"
firebase.database().ref("/").child(RoomName).update({
purpose:"addingroomname"
})
}
function redirecttoroomname(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}
username= localStorage.getItem("Username")
document.getElementById("username").innerHTML="welcome "+username
function logout(){
   window.location = "index.html"
   localStorage.removeItem("Username")
   localStorage.removeItem("RoomName")


}

