//object4.js
//filter() -> 조건을 만족하는 요소를 새로운 배열을 생성.

let numAry = [20, 27, 33, 42, 19, 63, 52];
let filterAry = numAry.filter(function (item, idx, ary) {
  if (item % 2 == 0) {
    return true;
  }
  return false;
});

console.log(filterAry);



//salary가 5000이 넘는 사원들을 empAry에 저장.


let x = JSON.parse(json); //배열
let empAry = x.filter(function(item){
  if(item.salary >= 5000){
    return true;
  }
  return false;
})
console.log(empAry);


