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