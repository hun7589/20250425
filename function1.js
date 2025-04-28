//function1.js
//2개의 수를 더하고 큰 값에 10을 더하고 작은값에 5를 더한 후 합을 구하는 기능.

//함수의 정의.
let x = parseInt(prompt(`첫째 값을 입력하시오`));
let y = parseInt(prompt(`둘째 값을 입력하시오`));

function i(parameter1, parameter2) {
  let result = 0;

  if (parameter1 > parameter2) {
    result = (parameter1 + 10) + (parameter2 + 5);
  } else {
    result = (parameter2 + 10) + (parameter1 + 5);

  }
  // console.log(`결과값(${x},${y}) : ${result}`);
  return result; //return : 함수를 호출한 영역으로 결과 반환.
} // end of function.



let result = i(x, y);
document.write(`결과값 : ${result}`);
document.querySelector(`#result`).value = result
alert(`결과값 : ${result}`);
console.log(`결과값 : ${result}`);



// let x = parseInt(prompt(`첫째 수를 입력하시오`));
// let y = parseInt(prompt(`둘째 수를 입력하시오`));
// let sum = 0;
// if (x > y) {
//   result = (x + 10) + (y + 5);
// } else {
//   result = (y + 10) + (x + 5);

// }
// console.log(`결과값 : ${result}`);