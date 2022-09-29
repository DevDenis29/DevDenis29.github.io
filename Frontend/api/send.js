// Your web app's Firebase configuration
const fuck = new Audio("./assets/Sounds/fckboi.mp3")

var firebaseConfig = {
  apiKey: "AIzaSyARxzB-d0GsuL4f1Sf6sCiLRVFQwTZ8-BM",
  authDomain: "mate-test-528ea.firebaseapp.com",
  databaseURL: "https://mate-test-528ea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mate-test-528ea",
  storageBucket: "mate-test-528ea.appspot.com",
  messagingSenderId: "192421928994",
  appId: "1:192421928994:web:29c6ff2ac523bafcd16a7b",
  measurementId: "G-GK992EXVQ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();

const tag = Math.floor(Math.random() * 10000)
const randomNum = Math.floor(Math.random() * 10)
// get user's data
const username = prompt("Enter username");

if (username != "") { 

} else {
  alert("enter username")
}
// submit form
// listen for submit event on the form and call the postChat function
document.getElementById("message-form").addEventListener("submit", sendMessage);

// send message to db
function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("msg");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("messages/" + timestamp).set({
    username,
    message,
    tag: "#" + tag,
  });
}

// display the messages
// reference the collection created earlier
const fetchChat = db.ref("messages/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
    const message = `<div id="cont"><img id="pfp" src="./assets/img/Chungus.png"><li class=${
      username === messages.username ? "sent" : "receive"
    }><div id="cont">${messages.username}<sub>#${tag}</sub>: </span>${messages.message}</li></div>`;
    // append the message on the page
      document.getElementById("messages").innerHTML += message;
  

  if (messages.message != "/play") { 
    
  } else {
    document.getElementById("secret").style.display = "block"
  }
  if (messages.message != "!hide") { 
    
  } else {
    document.getElementById("secret").style.display = "none"
  }


});
