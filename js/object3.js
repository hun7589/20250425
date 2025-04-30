//object3.js
//indexOf()

let numArr = [10, 21, 33, 54, 16, 73]
let result = numArr.indexOf(333); // -1은 찾는 요소가 없음.
console.log(result);

let strAry = ["홍길동", "김길동", "홍길순"];
// strAry.forEach(function (item) {
//   if (item.indexOf("길동") != -1){
//     console.log(item);
//   }
// });
// console.log("홍길동".indexOf("길"));


strAry.forEach(function (item) {
  if (item.indexOf("홍") == 0) {
    console.log(item);
  }
});



//배열 numAry(변수) => 10~50 사이의 값을 10개 저장. 콘솔에 출력(forEach);

let numAry = [];
for (i = 0; i <= 10; i++) {
  numAry.push(Math.floor(Math.random() * 41) + 10);

}
numAry.forEach(function (item) {
  console.log(item);

});
console.log(numAry);


// numAry = [10, 20, 60]
//10~50 사이의 값이 정상적으로 생성되는지 체크 : every()

result = numAry.every(function (item) {
  return item >= 10 && item <= 50;
})
console.log(result);
