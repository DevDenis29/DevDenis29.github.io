// Your web app's Firebase configuration
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

// get user's data
const username = prompt("Please Tell Us Your Name");

if (username != "") { 

} else {
  alert("Enter username");
  window.location.href = "index.html";
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
  });
}

// display the messages
// reference the collection created earlier
const fetchChat = db.ref("messages/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }>${messages.username}: </span>${messages.message}</li><br>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});
