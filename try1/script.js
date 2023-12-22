let form = document.getElementById('message_form');
const list = document.getElementById("messages");
form.addEventListener('submit', function(e){
    e.preventDefault();
    let data = new FormData(form);
    let list1=[];
    for(const [key,value] of data){
        list1.push(value)
    }
    let message = list1.join(': ');
    // console.log(typeof(list1));
    list.innerHTML += (
        `<li>${message}</li>`
        // '<li></li>'
    )
})
