// DOM (Document Object Model)

// document.getElementById("paragraph").innerText = "Hello Waleed!"


// let head = document.getElementById("heading")
// head.innerText = "Hello Karachi!"
// head.style.color = "white"
// head.style.backgroundColor = "red"


// let paragraph = document.getElementById("para")

// paragraph.innerText = "This is not a dummy paragraph";
// paragraph.style.color = "red"
// paragraph.style.backgroundColor = "green"




// let box = document.getElementById("box")
// box.innerHTML = "<p>Paragraph added from JS</p>"
// box.classList.add("imp-para"); // To add class



// box.style.cssText = `
//     color: red;
//     padding : 12px;
//     border-radius : 10px;
//     background-color: pink;
// `;


// let para = document.getElementsByTagName('p')
// para[0].innerText = "My Paragraph";

// let para2 = document.getElementsByClassName("pr")
// para[1].innerText = "hello";

function bgChange(){
    document.getElementById("box").style.backgroundColor = "red";
}

function removeBG(){
    document.getElementById("box").style.backgroundColor = "white";
    
}

function textChange(){
    document.getElementById("txt").innerText = "Hello World!";
    
}

function addClass(){
    document.getElementById("box").classList.add("my-box");
    
}

function toggleClass(){
    document.getElementById("box").classList.toggle("my-box");
    
}
