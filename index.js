const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = [];
for (let n = 1; n <= 9; n++) {
  numbers.push(n);
}
const answer = [];
for (let n = 0; n <= 3; n += 1) {
  //4번 반복
  const index = Math.floor(Math.random() * (numbers.length - n));
  answer.push(numbers[index]);
  numbers.slice(index, 1);
}
console.log(answer);
const tries = [];
//적합성 검사하는 코드
function checkInput(input) {
  if (input.length !== 4) {
    return alert("4자리 숫자를 입력해주세요.");
  }
  if (new Set(input).size !== 4) {
    //중복을 제거
    return alert("중복되지않게 입력해주세요.");
  }
  if (tries.includes(input)) {
    return alert("이미 시도한 값입니다.");
  }

  return true;
}
let out = 0;
$form.addEventListener("submit", (event) => {
  event.preventDefault(); //기본동작 막기(a태그도 마찬가지)
  //console.log("submit : ", event);
  const value = $input.value;
  $input.value = "";
  //const valid = checkInput(value);
  if (!checkInput(value)) {
    return;
  }
  //입력값 문제없음
  if (answer.join("") === value) {
    $logs.textContent = "홈런!";
    return;
  }
  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
    $logs.appendChild(message);
    return;
  }

  let strike = 0;
  let ball = 0;

  answer.forEach((element, i) => {
    const index = value.indexOf(element);
    if (index > -1) {
      if (index == i) {
        //자릿수도 같을시
        strike += 1;
      } else {
        //숫자만 같을시
        ball += 1;
      }
    }
  });
  //   for (let i = 0; i < answer.length; i++) {
  //     const index = value.indexOf(answer[i]);
  //     if (index > -1) {
  //       if (index == i) {
  //         //자릿수도 같을시
  //         strike += 1;
  //       } else {
  //         //숫자만 같을시
  //         ball += 1;
  //       }
  //     }
  //   }
  if (strike == 0 && ball == 0) {
    out++;
    $logs.append("아웃", document.createElement("br"));
  } else {
    $logs.append(
      `${value} : ${strike} 스트라이크 ${ball} 볼`,
      document.createElement("br")
    );
  }
  if (out === 3) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
    $logs.appendChild(message);
    return;
  }
  //몇 스트라이크인지 몇 볼인지 검사
  tries.push(value);
});
