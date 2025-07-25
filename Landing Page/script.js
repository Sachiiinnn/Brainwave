let navbar = document.querySelector('.navbar');
let menuButton = document.querySelector('#menu');
let closeButton = document.querySelector('#close')
let content = document.querySelector('.content')

menuButton.onclick = () =>{
    navbar.classList.toggle("active");
    menuButton.classList.toggle("active")
    closeButton.classList.add("active");
    content.classList.toggle("active")
}

closeButton.onclick = () =>{
    navbar.classList.remove("active");
    menuButton.classList.remove("active");
    closeButton.classList.remove("active");
    content.classList.remove("active")
}