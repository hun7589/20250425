//for2.js

//1~10까지 반복
//2의배수,3의배수 => 2의배수는 sum2 저장.
//                  3의배수는 sum3 저장.


let sum = 0;
let sum2 = 0;
let sum3 = 0

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    // let sum2 = 0;
    sum2 += i;
    console.log('2의배수의 합은' + sum2);
  }if (i % 3 == 0) {
    // let sum3 = 0;
    sum3 += i;
    console.log('3의배수의 합은' + sum3);
  }
  sum += i;

  console.log('1부터 10까지의 합은' + sum);
}