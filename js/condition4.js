//condition4exe.js
//1~10 임의의 값을 생성하고
//생성값을 변수에 저장한 후 그 값이 2의 배수인지 3의배수 혹은 2,3의 배수가 아닌지

let x = 1 + parseInt(Math.random() * 10);
console.log(x)
if (x % 2 == 0 && x % 3 == 0) {
  console.log("2&3의 공배수");
} else if (x % 3 == 0) {
  console.log("3의 배수");
}else if (x % 2 == 0) {
  console.log("2의 배수");
}else {
  console.log("2와3의 공배수가 아님");
}


