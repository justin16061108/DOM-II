// Your code goes here

//header mouse over (2)
const animationTop = document.querySelector (".intro") .children[0];
animationTop.addEventListener("mouseenter", (e) => {
    e.target.style.transform = "scale(1.3)";
    e.target.style.transition = "transform 0.9s";
});
animationTop.addEventListener("mouseleave", (e) => {
    e.stopPropagation();
    e.target.style.transform = "scale(1)";
});


//keydown keyup
const body = document.querySelector('body');
const header = document.querySelector('header');
body.addEventListener("keydown", () => header.style.opacity = "0");
body.addEventListener("keyup", () => header.style.opacity = "1");


//wheel
body.addEventListener('wheel', function alertMeOnce(){
    alert("Welcome!");
    body.removeEventListener('wheel', alertMeOnce);
  });

//click
const header2 = document.querySelectorAll("h2")
header2.forEach( cl => {
    cl.addEventListener("click", () => {
        cl.style.color = "purple";
    })
})

//double-click
const b = document.querySelectorAll("a");
 b.forEach( db => {
    db.addEventListener("dblclick", () => {
   db.style.backgroundColor = 'navy';
  });
});


//drag
const letsgopic = document.querySelector(".img-content > img" );
letsgopic.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.5)');


//resize
window.addEventListener('resize', () => alert("wait!"));

//scroll
window.addEventListener('scroll', () => alert("danger!"));

//prevenDefault
const stopLink = document.querySelector ("nav")
stopLink.addEventListener("click", (e) => {
    e.preventDefault();
});