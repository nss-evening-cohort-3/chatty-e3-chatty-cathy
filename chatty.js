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
    }
  }
 }());   

