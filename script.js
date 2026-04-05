/* TYPING EFFECT */

const text = [
"Full Stack Developer",
"Web Developer",
"Problem Solver",
"DSA Enthusiast"
]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

if(count === text.length){
count = 0
}

currentText = text[count]
letter = currentText.slice(0,++index)

document.getElementById("typing").textContent = letter

if(letter.length === currentText.length){
count++
index = 0
}

setTimeout(type,120)
}

type()

/* DARK MODE */

const toggle = document.getElementById("modeToggle")

toggle.onclick = () => {
document.body.classList.toggle("light")
}

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(){
setTimeout(() => {
form.reset();
}, 1000);
});
