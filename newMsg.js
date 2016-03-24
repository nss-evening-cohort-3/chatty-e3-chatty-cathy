"use strict"
// Another IIFE should accept an element id and the user message and then add the user's 
// message - along with the delete button - to the specificed parent element. 
// Each message should be stored in a private array in this IIFE. 
// This IIFE should expose a function to read all messages and delete a single message
Chatty = (function(chatmessages) {
  let allMessages = [];

  chatmessages.getMessages = function () {
    let message = document.getElementsByClassName('msg');
    for (let i = 0; i < message.length; i++) {
      let current = message[i];
      allMessages.push(current.innerText);
    };
    return allMessages;
  };


 return chatmessages;
}(Chatty || {}));