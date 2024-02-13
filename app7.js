let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game started");
    started = true;
    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 200);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randomIdx = Math.floor(Math.random() * 3);
  let randomcolour = btns[randomIdx];
  let randombtn = document.querySelector(`.${randomcolour}`);
  gameseq.push(randomcolour);
  console.log(gameseq);
  btnflash(randombtn);
}
function checkans(index) {
  // console.log("current level : ", level);
  // let index = level - 1;
  if (userseq[index] == gameseq[index]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
      // levelup();
    }
  } else {
    h2.innerHTML = `Game Over ! Your score was <b> ${level} </b> <br>Press Any Key To Start..`;
    reset();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);
  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  checkans(userseq.length - 1);
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
