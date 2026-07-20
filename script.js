// Typing Effect
const message =
"A small surprise for someone special... 💙";

let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.querySelector(".typing").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

window.onload = () => {
  typeWriter();
  createStars();
};

// Open Page 2
function nextPage() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("page2").style.display = "block";
  launchHearts();
}

// Show Letter
function showLetter() {
  document.getElementById("page2").style.display = "none";
  document.getElementById("letter").style.display = "block";
  launchHearts();
}

// Floating Hearts
function launchHearts() {

  for (let j = 0; j < 40; j++) {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = Math.random();
    heart.style.transition = "all 5s linear";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform =
        `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
      heart.style.opacity = 0;
    }, 50);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

// Twinkling Stars
function createStars() {

  for (let k = 0; k < 100; k++) {

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.borderRadius = "50%";
    star.style.background = "white";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random();
    star.style.animation =
      `twinkle ${2 + Math.random() * 3}s infinite`;

    document.body.appendChild(star);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes twinkle{
      0%,100%{opacity:.2;}
      50%{opacity:1;}
    }
  `;
  document.head.appendChild(style);
}

// Mouse Glow Effect
document.addEventListener("mousemove", (e) => {

  const glow = document.createElement("div");

  glow.style.position = "fixed";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  glow.style.width = "10px";
  glow.style.height = "10px";
  glow.style.borderRadius = "50%";
  glow.style.background = "#ffffff";
  glow.style.boxShadow = "0 0 20px #ffffff";
  glow.style.pointerEvents = "none";
  glow.style.opacity = "1";
  glow.style.transition = "all .8s";

  document.body.appendChild(glow);

  setTimeout(() => {
    glow.style.transform = "scale(5)";
    glow.style.opacity = "0";
  }, 20);

  setTimeout(() => {
    glow.remove();
  }, 800);
});
function toggleMusic(){

const music=document.getElementById("bgMusic");

if(music.paused){
music.play();
}else{
music.pause();
}

}

function fireworks(){

for(let i=0;i<120;i++){

const f=document.createElement("div");

f.className="firework";

f.style.left="50%";
f.style.top="50%";

document.body.appendChild(f);

const x=(Math.random()-0.5)*900;
const y=(Math.random()-0.5)*900;

f.animate([
{
transform:"translate(0,0)",
opacity:1
},
{
transform:`translate(${x}px,${y}px)`,
opacity:0
}
],{
duration:1800
});

setTimeout(()=>{
f.remove();
},1800);

}

}
const quotes=[

"Your smile can brighten even the darkest day. 🤍",

"Some people become special without even trying. 💙",

"You deserve happiness every single day. ✨",

"Stay exactly the way you are. 🌸",

"Keep smiling... it suits you the best. 😊"

];

let q=0;

setInterval(()=>{

const box=document.getElementById("quote");

if(box){

box.innerHTML=quotes[q];

q=(q+1)%quotes.length;

}

},3000);

function showFinal(){

document.getElementById("quotes").style.display="none";

document.getElementById("finalPage").style.display="block";

}

function fallingRoses(){

setInterval(()=>{

const rose=document.createElement("div");

rose.className="rose";

rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";

rose.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},9000);

},600);

}

fallingRoses();
