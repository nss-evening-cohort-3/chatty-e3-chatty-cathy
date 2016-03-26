"use strict"
// Another IIFE should accept an element id and the user message and then add the user's 
// message - along with the delete button - to the specificed parent element. 
// Each message should be stored in a private array in this IIFE. 
// This IIFE should expose a function to read all messages and delete a single message

// This function takes our existing messages from the JSON and pushes to the DOM.
function existingMsg(eMsg) {
    let string = "";
    let toDom = document.getElementById("messageBox");
    for (let i = 0; i < eMsg.length; i++) {
      string +=  `<div class="msg">${eMsg[i].msg}`;
      string += "<button type='button' class='btn btn-default btn-xs delete'>";
      string += "<span class='glyphicon glyphicon-trash' aria-hidden='true'>";
      string += "</span> delete me!</button></div>";
    }
    toDom.innerHTML = string;
    addMsg(eMsg);
};

function addMsg (eMsg) {
    document.getElementById("ack").addEventListener("keyup", function (event) {
       if (event.keyCode === 13) {
        eMsg.push("<div class='msg'>"+ event.target.value +"<button type='button' class='btn btn-default btn-xs delete'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> delete me!</button></div>");
        document.getElementById("messageBox").innerHTML += eMsg[eMsg.length-1];
        clearCheck();
        }
    });
};

let buttonDark = document.getElementById("dark"); 
let buttonLarge = document.getElementById("large"); 
let msgBox = document.getElementById("messageBox"); 

// // let buttonLarge = document.getElementById("large");

buttonDark.addEventListener("click", function() {
  msgBox.classList.toggle("dark");
});

buttonLarge.addEventListener("click", function() {
  msgBox.classList.toggle("large"); 
}); 

Chatty.loadMessages(existingMsg);