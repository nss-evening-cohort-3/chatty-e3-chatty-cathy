"use strict";
// for disabling the clear button only
var clearButton = document.getElementById('clear')
let disable = (btn) => {
  if (!btn.hasAttribute('disabled')) {
    btn.setAttribute("disabled", true);
  }
};

var userMsg = document.getElementById('ack');
let msgBox = document.getElementById('message')

let addMsg = (msg) => {
      if (msg.keyCode === 13) {
      let newUserMsg = userMsg.value;
      msgBox.innerHTML += `<div class="aack">${newUserMsg}</div>`
      
  }
};
userMsg.addEventListener('keyup', addMsg);