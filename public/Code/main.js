var Menu = document.querySelector("#menu");
var Close = document.querySelector("#closed");
var Navlinks = document.querySelector(".nav-links");

Menu.addEventListener("click", function(){
    Navlinks.style.right = "0"
})

Close.addEventListener("click",function(){
    Navlinks.style.right = "-100%"
})