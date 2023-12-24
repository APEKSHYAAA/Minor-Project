let username = document.getElementById("username");
let message = document.getElementById("message");
let form = document.getElementById("message_form");
let list = document.getElementById("messages");
form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(typeof(list1));
    console.log(username.value);
    list.innerHTML += (
        `<li>${username.value}: ${message.value}</li>`
        // '<li></li>'
        )
    socket.emit('chat message', `${username.value}: ${message.value}`); // let server know

    message.value = "";
    var chatHistory = document.querySelector('.chat-history');
    chatHistory.scrollTop = chatHistory.scrollHeight;
})

window.onload = function() {
  var editor = CodeMirror(document.getElementById("code_with_highlight"), {
    lineNumbers: true,
    mode:  "javascript",
    viewportMargin: Infinity,
  });
  editor.setSize(null, "100%");
};

let chat = document.getElementById("chat-history");
let messageBox = document.getElementById("message_box")
let output = document.getElementById("output");
let toggle_output = document.getElementById("output_head")
toggle_output.onclick = function() {
    console.log("hi");
    chat.style.display = "none";
    messageBox.style.display = "none";
    output.style.display = "block";
    toggle_output.className = "active"
    toggle_chat.className = "inactive";
}
let toggle_chat = document.getElementById("chat_head")
toggle_chat.onclick = function() {
    chat.style.display = "block";
    messageBox.style.display = "block";
    output.style.display = "none";
    toggle_chat.className = "active"
    toggle_output.className = "inactive"
}





// Saving user name for a session

let user_name = document.getElementById("username");

// Save the value of the input box to localStorage whenever it changes
username.addEventListener('input', function() {
    localStorage.setItem('username', user_name.value);
});

// Set the value of the input box from localStorage when the page loads
window.onload = function() {
    var editor = CodeMirror(document.getElementById("code_with_highlight"), {
        lineNumbers: true,
        mode:  "javascript",
        viewportMargin: Infinity,
    });
    editor.setSize(null, "100%");

    // Get the saved value from localStorage
    var savedUsername = localStorage.getItem('username');

    // If there is a saved value, set the value of the input box to it
    if (savedUsername !== null) {
        username.value = savedUsername;
    }
};

// Socket.io
const socket = io();

socket.on('chat message', (msg)=> {
    list.innerHTML += `<li>${msg}</li>`;
    var chatHistory = document.querySelector('.chat-history');
    chatHistory.scrollTop = chatHistory.scrollHeight;
})