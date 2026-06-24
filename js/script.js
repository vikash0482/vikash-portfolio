const roles = [

"Full Stack Developer"

];

let roleIndex = 0;

let charIndex = 0;

let currentText = "";

let isDeleting = false;

const typing = document.getElementById("typing");

function type(){

const fullText = roles[roleIndex];

if(!isDeleting){

charIndex++;

currentText = fullText.substring(0,charIndex);

}

else{

charIndex--;

currentText = fullText.substring(0,charIndex);

}

typing.textContent = currentText;


let speed = isDeleting ? 60 : 100;


/* pause after full word */

if(!isDeleting && charIndex === fullText.length){

speed = 1500;

isDeleting = true;

}

/* restart typing */

else if(isDeleting && charIndex === 0){

isDeleting = false;

speed = 500;

}


setTimeout(type,speed);

}

type();