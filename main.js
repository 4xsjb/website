



let firstbtn = document.getElementById("menu");
let navbar = document.getElementById("navbar");
let closebtn = document.getElementById("close");
 
 
firstbtn.addEventListener('click', function(){
    firstbtn.style.display = "none";
    navbar.style.display = "flex";
    closebtn.classList.remove('hide');
})

closebtn.addEventListener('click', function() {
    closebtn.classList.add('hide');
    navbar.style.display= "none";
    firstbtn.style.display = "inline";
})

// calculator//

let screen = document.getElementById("display");
let clearbtn = document.getElementById("clearbtn");
let plusbtn = document.getElementById("plusbtn");
let deletebtn = document.getElementById("deletebtn");
let equalbtn = document.getElementById("equal");
let message = document.getElementById("message");
let munisbtn = document.getElementById("minus");

function display(num) {
  message.style.display = "none";
  if(screen.value == ""){
  screen.value += num ;
  }
  else if(screen.value =="Error" || screen.value == "too much !"){
    screen.value = "" + num ;
  }
  else if (screen.value.length >= 9) {
    message.style.display = "inline";
    screen.value += num ;
  }
  else {
    screen.value += num ;
  }
}
clearbtn.addEventListener('click' , function(){
  screen.value = '';
  message.style.display = "none";
})
plusbtn.addEventListener('click', function() {
  if(screen.value =="Error" || screen.value == "too much !"){
    screen.value = "" + '+' ;
  }
  else {
    screen.value += '+';
  }
})
munisbtn.addEventListener('click', function() {
  if(screen.value =="Error" || screen.value == "too much !"){
    screen.value = "" + '-' ;
  }
  else {
    screen.value += '-';
  } 
})
deletebtn.addEventListener('click', function(){
  if(screen.value == "Error" || screen.value == "too much !"){
    screen.value = "";
  }
  screen.value = screen.value.slice(0, -1);
})
equalbtn.addEventListener('click', function(){
  try {
    message.style.display = "none";
    screen.value = eval(screen.value);
    if(screen.value == "Infinity" || screen.value == "function Error() { [native code] }"){
      screen.value= "Error";
    }
    else if(screen.value == "undefined"){
      screen.value = "";
    }
    }
  catch(error) {
    screen.value = "Error";
  }
})