//while1.js
//1~10 까지의 값 중에서 홀수값만 콘솔에 출력.(for문)

for (let i = 1; i < 11; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

//반복횟수에 상관없이 조건을 충족하는 동안 반복. == while
// let no = 1;
// while (true) {
//   if (no % 2) {
//     console.log(no);
//   }
//   no++;

//   if (no > 10) {
//     break; //반복 종료.
//   }
// }

//임의의 값 (0 ~ 100)값을 생성하다가 50보다 작은 값이 나오면, 반복종료.
// let x = 0;
let running=true;
while(running){
  x = Math.floor(Math.random()*101); // 0<=x<101의 값 생성.
  console.log(x);
  if(x==100){
    // break;
    running=false;
  }
}
console.log("end of prog.");