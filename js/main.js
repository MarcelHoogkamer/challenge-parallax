var objImage= null;
function init(){
  objImage=document.getElementById("bird");
  objImage.style.position='relative';
  objImage.style.left='200px';
  objImage.style.top='200px';
}

function getKeyAndMove(e){
  var key_code=e.which||e.keyCode;
  switch(key_code){
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
  }
}
function moveLeft(){
  objImage.style.left=parseInt(objImage.style.left)-5 +'px';
}
function moveUp(){
  objImage.style.top=parseInt(objImage.style.top)-5 +'px';
}
function moveRight(){
  objImage.style.left=parseInt(objImage.style.left)+5 +'px';
}
function moveDown(){
  objImage.style.top=parseInt(objImage.style.top)+5 +'px';
}
window.onload=init;

window.addEventListener("keydown", e => {
  getKeyAndMove(e);
}
)
