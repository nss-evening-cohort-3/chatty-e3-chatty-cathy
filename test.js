// "use strict";
// for disabling the clear button only
// var clearButton = document.getElementById('clear')
// let disable = (btn) => {
//   if (!btn.hasAttribute('disabled')) {
//     btn.setAttribute("disabled", true);
//   }
// };

// var userMsg = document.getElementById('ack');
// let msgBox = document.getElementById('message')

// let addMsg = (msg) => {
//       if (msg.keyCode === 13) {
//       let newUserMsg = userMsg.value;
//       msgBox.innerHTML += `<div class="aack">${newUserMsg}</div>`
      
//   }
// };
// userMsg.addEventListener('keyup', addMsg);

// the code below was built by David. It was our initial foray into getting items 
// that populate the DOM pushed to a private array at the same time. 
//     },
//     makeArray: function(callBack) {
//       let message = document.getElementsByClassName('msg');
//         for (let i = 0; i < message.length; i++) {
//           let current = message[i];
//           messages.push(current.innerText);
//           console.log(messages)
//         };
//     },
//     getMessages: function(callBack) {
//       return messages;
//     }