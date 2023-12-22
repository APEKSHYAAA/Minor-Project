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
})

window.onload = function() {
  var editor = CodeMirror(document.getElementById("code_with_highlight"), {
    lineNumbers: true,
    mode:  "javascript",
    viewportMargin: Infinity,
  });
  editor.setSize(null, "100%");
};