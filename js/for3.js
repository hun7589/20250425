//for3.js
let sum = 0;

// for(let i = 1;i<=5;i++){
//   let x = prompt("1~10까지의 숫자를 입력하세요.");
//   let y = parseInt(x); //"7" -> 7
//   sum+=y;
// }
// console.log(`누적합계: ${sum}입니다.`); //`키는 '키와 다르다.
// // console.log('누적합계: '+sum);

let count = 0; //합한 횟수
let avg = 0; //평균값.
for(let i = 1;i<=5;i++){
  
  let x = prompt("1~10까지의 숫자를 입력하세요.");
  let y = parseInt(x); //"7" -> 7
  if(y>=1&&y<=10){
    sum+=y;
    count++;
  
  }//end of if.
}//end of for.
avg = sum/count;
console.log(`누적합계: ${sum}입니다. 평균은 ${avg}입니다.`); //`키는 '키와 다르다.
