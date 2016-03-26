// Another IIFE should accept a message element id and then remove the correct element from the DOM. 
// This IIFE shold also remove the correspondng message from the private array that was created in the previous IIFE.

// This function attaches event listeners to our delete buttons that remove only the message 
// associated with it using event bubbling. 
function addDeleteBtns() {
    document.querySelector("body").addEventListener("click", function(event) {
        if (event.target.className === "btn btn-default btn-xs delete") {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        clearCheck();
    }
}
)};

// This is the code for our clear button which has two requirements associated with it: 
// 1) upon click, it empties the message-box container. 2) If there are no messages in that container, 
// it should be disabled. 
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("messageBox").innerHTML = "";
    clearCheck();
});

function clearCheck() {
    let clearbtn = document.getElementById('clear');
    var msgbox = document.getElementById('messageBox');
    console.log(msgbox)
    console.log(clearbtn.attributes)
    if (msgbox.innerHTML === "") {
    document.getElementById("clear").setAttribute("disabled", true);
        } else if (msgbox.children.length > 0) { 
    clearbtn.removeAttribute('disabled', true);
    }
};

Chatty.loadMessages(addDeleteBtns);