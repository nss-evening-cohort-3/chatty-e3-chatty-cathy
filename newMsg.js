"use strict"
// Another IIFE should accept an element id and the user message and then add the user's 
// message - along with the delete button - to the specificed parent element. 
// Each message should be stored in a private array in this IIFE. 
// This IIFE should expose a function to read all messages and delete a single message

// This function takes our existing messages from the JSON and pushes to the DOM.
var Chatty = (function(originalChatty) {
  // use strict does like let working with IIFEs.
  originalChatty.existingMsg = function(eMsg) {
    let string = "";
    let toDom = document.getElementById("messageBox");
    for (let i = 0; i < eMsg.length; i++) {
      string +=  `<div class="msg">${eMsg[i].msg}`;
      string += "<button type='button' class='btn btn-default btn-xs delete'>";
      string += "<span class='glyphicon glyphicon-trash' aria-hidden='true'>";
      string += "</span> delete me!</button></div>";
    }
    toDom.innerHTML = string;
    originalChatty.addMsg(eMsg);
  },
  originalChatty.addMsg = function(eMsg) {
    document.getElementById("ack").addEventListener("keyup", function (event) {
       if (event.keyCode === 13) {
        eMsg.push("<div class='msg'>"+ event.target.value +"<button type='button' class='btn btn-default btn-xs delete'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> delete me!</button></div>");
        document.getElementById("messageBox").innerHTML += eMsg[eMsg.length-1];
       }
    });
  }
  return originalChatty;
})(Chatty); 

Chatty.loadMessages(Chatty.existingMsg);
