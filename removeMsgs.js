// Another IIFE should accept a message element id and then remove the correct element from the DOM. 
// This IIFE shold also remove the correspondng message from the private array that was created in the previous IIFE.
// This function attaches event listeners to our delete buttons that remove only the message 
// associated with it using event bubbling. 
var Chatty = (function(originalChatty) { 
    originalChatty.addDeleteBtns = function() {
        originalChatty.clearBtn();    
        document.querySelector("body").addEventListener("click", function(event) {
        if (event.target.className === "btn btn-default btn-xs delete") {
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
            originalChatty.clearCheck();   
        }
        });
    },
    originalChatty.clearCheck = function() {
        if (document.getElementById("messageBox").innerHTML === "") {
            document.getElementById("clear").setAttribute("disabled", true);
        };
    },
    originalChatty.clearBtn = function () { 
        document.getElementById("clear").addEventListener("click", function () {
            document.getElementById("messageBox").innerHTML = "";
            originalChatty.clearCheck();    
        });
    }
    return originalChatty;
})(Chatty);

Chatty.loadMessages(Chatty.addDeleteBtns);
