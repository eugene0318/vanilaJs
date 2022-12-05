const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "./rsp.png";
$computer.style.background = `url(${IMG_URL}) 0 0 `;
$computer.style.backgroundSize = "auto 200px";

const rspX = {
  scissors: "0", //가위
  rock: "-200px", //바위
  paper: "-400", //보
};

let coord = "0";
let computerChoice = "scissors";
const changeComputerHand = () => {
  if (computerChoice == "scissors") {
    computerChoice = "rock";
  } else if (computerChoice == "rock") {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = "auto 200px";
  //setTimeout(changeComputerHand, 5000);
};

//let intervsalId = setInterval(changeComputerHand, 50);
const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};
let clickable = true;
let me = 0;
let computer = 0;
const clickButton = () => {
  clearInterval(intervsalId);
  clickable = false;
  const myChoice =
    event.target.textContent === "바위"
      ? "rock"
      : event.target.textContent === "가위"
      ? "scissors"
      : "paper";
  const myScore = scoreTable[myChoice];
  const computerScore = scoreTable[computerChoice];
  const diff = myScore - computerScore;
  let message;
  let score = 0;
  if ([2, -1].includes(diff)) {
    me += 1;
    message = "승리";
  } else if ([-2, 1].includes(diff)) {
    computer += 1;
    message = "패배";
  } else {
    message = "무승부";
  }
  if (me === 3) {
    $score.textContent = `나의 승리 ${me} : ${computer}`;
  } else if (computer === 3) {
    $score.textContent = `컴퓨터의 승리 ${me} : ${computer}`;
  } else {
    $score.textContent = `${message} ${me} ${me} : ${computer}`;
    setTimeout(() => {
      clickable = true;
      intervsalId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
  //[-1.0,1].includes(diff)
  setTimeout(() => {
    //clearInterval(intervsalId);
    clickable = true;
    intervsalId = setInterval(changeComputerHand, 50);
  }, 1000);
};
$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
//setTimeout(changeComputerHand, 5000);
// setInterval(() => {
//   if (computerChoice == "scissors") {
//     computerChoice = "rock";
//   } else if (computerChoice == "rock") {
//     computerChoice = "paper";
//   } else {
//     computerChoice = "scissors";

//     $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
//     $computer.style.backgroundSize = "auto 200px";
//   }
// }, 10000);
