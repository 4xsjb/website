let firstbtn = document.getElementById("menu");
let navbar = document.getElementById("navbar");
let closebtn = document.getElementById("close");
firstbtn.addEventListener('click', function(){
    firstbtn.style.display = "none";
    navbar.style.transform = "translateX(0%)";
    closebtn.classList.remove('hide');
})
closebtn.addEventListener('click', function() {
    closebtn.classList.add('hide');
    navbar.style.transform = "translateX(-100%)"; 
    firstbtn.style.display = "inline";
})
