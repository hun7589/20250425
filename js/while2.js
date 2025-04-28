//while2.js
//사용자에게 1~10까지의 임의의수를 입력.
//범위 밖의 값을 입력하면 종료. 입력값의 누적 합을 콘솔에 출력.

let sum = 0;
while (true) {
  let x = parseInt(prompt("임의의 수를 입력하시오.(1~10)"));
  if (x > 10 || x < 1) {
    break;

  }
  sum += x

}
console.log(sum);