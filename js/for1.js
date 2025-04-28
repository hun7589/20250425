//for1.js
let sum = 0;
for (let i = 0; i <= 5; i++) { // 1) 초기값  2) 조건  3)증강식
  sum += i;
  console.log('i의 값은' + i);
  console.log('sum의 값은' + sum);
}

// 1~20 반복 => 짝수인 경우의 합을 구할 때
//2,4,6,8,10,12....20

let x = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) { //조건 : 짝수일 때만 합해라.
    x += i; //누적.


  }// end of if.
}//end of for.
console.log('x의값은' + x);