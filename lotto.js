const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
const suffle = [];

while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); //무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); //뽑은 값은 배열에 들어감
  const value = spliceArray[0]; // 배열에 있는 값 꺼내기
  suffle.push(value); //꺼낸 값 배열에 넣기
}
console.log(suffle);
const winBalls = suffle.splice(0, 6).sort((a, b) => a - b);
const bonus = suffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");

const showBall = (number, $target) => {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.textContent = number;
  $target.appendChild($ball);
};
for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}
setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);
