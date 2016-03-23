"use strict"; 

// loads the JSON file
// contains the XHR call
let Chatty = (function () {
  let messages = [];
  // the loadCathyquotes is a different request to OPEN and SEND; after send we call that the same way we do functions with ()
  return {
    loadMessages: function (callBack) {
      let loader = new XMLHttpRequest(); 
      loader.open("GET", "messages.JSON");
      loader.send();
      loader.addEventListener("load", function () {
        // Set the value of the private array
        // this parse command is turning the JSON into js
          messages = JSON.parse(this.responseText).messages;
          callBack(messages);
      });
    },
  }
 }());   

// This function takes our existing messages from the JSON and pushes to the DOM.
function existingMsg(eMsg) {
    let string = "";
    let toDom = document.getElementById("messageBox");
    for (let i = 0; i < eMsg.length; i++) {
      string += `<div class="msg">${eMsg[i].msg}`;
      string += "<button type='button' class='btn btn-default btn-xs delete'>";
      string += "<span class='glyphicon glyphicon-trash' aria-hidden='true'>";
      string += "</span> delete me!</button></div>";
    }
    toDom.innerHTML = string;
}

// This function attaches event listeners to our delete buttons that remove only the message 
// associated with it using event bubbling. 
document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.className === "btn btn-default btn-xs delete") {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
});

Chatty.loadMessages(existingMsg);







