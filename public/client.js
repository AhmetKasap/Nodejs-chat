const socket = io.connect("http://localhost:3000/")


var userName = document.getElementById('name').value
var message = document.getElementById('message').value
var btn = document.getElementById('btn').addEventListener('click',fun)

function fun () {
    io.emmit('chat', {  
        userName : userName,
        message : message
    })
}

socket.on('chat', data => {
    console.log(data.userName, data.message)
    var p = document.getElementById('card-body')
    p.innerHTML= '<p>' + data.userName + ' : </p>' + '<p>' + data.message + ' : </p>'
    data.message.value=''
})
