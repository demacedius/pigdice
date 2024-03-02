const dice = document.querySelector(".dice");
const roll = document.querySelector(".btn-roll");
const hold = document.querySelector(".btn-hold");
const newGame = document.querySelector(".bouton-new");
const current0 = document.querySelector("#current-0");
const current1 = document.querySelector("#current-1");
const score0 = document.querySelector("#score-0");
const score1 = document.querySelector("#score-1");
const panel0 = document.querySelector(".player-0-panel");
const panel1 = document.querySelector(".player-1-panel");

let counter = 0;
let s0 = 0;
let s1 = 0;

dice.style.display = "none"

roll.addEventListener("click", () => {
    let rndNum = rnd();
    counter += rndNum;
    dice.style.display = "block";
    setDiceImgSrc(rndNum);
    if(rndNum !== 1){
        if(panel0.classList.contains("active")){
            current0.textContent = counter;
        }else {
            current1.textContent = counter;
        }
    }else {
        counter = 0;
        current0.textContent = 0;
        current1.textContent = 0;
        panel0.classList.toggle("active");
        panel1.classList.toggle("active");
        
    }
});

hold.addEventListener("click", () => {
    if (panel0.classList.contains("active")) {
      s0 += counter;
      score0.textContent = s0;
      current0.textContent = 0;
      if (s0 >= 100) {
        alert("Player 1 Wins!");
        resetGame();
        return;
      }
    } else {
      s1 += counter;
      score1.textContent = s1;
      current1.textContent = 0;
      if (s1 >= 100) {
        alert("Player 2 Wins!");
        resetGame();
        return;
      }
    }
    counter = 0;
    panel0.classList.toggle("active");
    panel1.classList.toggle("active");
  });

function setDiceImgSrc(num) {
    let rndice = `image/dice-${num}.png`;
    dice.setAttribute("src", rndice);
}

function rnd() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function resetGame() {
    dice.style.display = "none";
    current0.textContent = 0;
    current1.textContent = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    s0 = 0;
    s1 = 0;
    counter = 0;
    if (!panel0.classList.contains("active")) {
      panel0.classList.toggle("active");
      panel1.classList.toggle("active");
    }
  }

  newGame.addEventListener("click", () => {
    resetGame();
  });