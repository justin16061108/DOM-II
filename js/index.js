// Your code goes here

//header mouse over (2)
const animationTop = document.querySelector (".intro") .children[0];
animationTop.addEventListener("mouseenter", (e) => {
    e.target.style.transform = "scale(1.3)";
    e.target.style.transition = "transform 0.9s";
});
animationTop.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
});


//keydown
const body = document.querySelector('body');
const header = document.querySelector('header');
body.addEventListener("keydown", () => header.style.opacity = "0");

//wheel
body.addEventListener('wheel', function alertMeOnce(){
    alert("Welcome!");
    body.removeEventListener('wheel', alertMeOnce);
  });


//double-click
const nav = document.querySelector(".nav");
nav.addEventListener("dblclick", (e) => {
    e.target.style.backgroundColor = 'navy';
  });