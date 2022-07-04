'use strict'
let messages = document.querySelector('.welcome').textContent;
let messageArray = messages;
console.log(messageArray);
let textPosition = 0;
let speed = 125;

let typewriter = () => {
  document.querySelector('.welcome').innerHTML = messageArray.substring(0,textPosition) + "<span>\u25ae</span>";
  // console.log(textPosition,messageArray.length,messageArray[0].substring(0,2) );
  if(textPosition === messageArray.length)document.querySelector('.welcome').innerHTML = messageArray.substring(0,textPosition);
  if(textPosition++ != messageArray.length)
  setTimeout(typewriter,speed);
}

window.addEventListener("load",typewriter);
function hideWelcome(){
  document.querySelector('.welcome').style.display = 'none'
  
}

document.addEventListener('click'
,function () {
 hideWelcome();
    document.location.href = 'name.html';
  
})
