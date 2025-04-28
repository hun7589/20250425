//function2.js

function sum(x=0, y=0) {
  let result = 0;
  result = x+y;
  return result; //반환.
}


function printStar(times = 1,shape = '⭐') {
  let str = ``;
  for (let i = 1; i <= times; i++) {
    str += shape;
  }
  console.log(str);

}
// 구구단을 출력하는 함수.

function printGugudan(dan=2){
  //document 영역에 출력하는 함수.
  for(let i = 1; i<= 9;i++){
    document.write(`<p>${dan}X${i} = ${dan*i}</p>`);
  }
}
printGugudan(13);
//함수호출
console.log(sum());
printStar(555);