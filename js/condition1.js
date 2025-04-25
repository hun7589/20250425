//condition.js
let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3>5;
isTrue = num1<5;
isTrue = --num1<5;
isTrue = --num1 <= 4|| num2++ == 10;
isTrue = --num1 <= 4&& num2++ == 10;
isTrue = 0; //true / false => truthy / falsy(0,"",null,undefied,NaN)
isTrue = ++num2 %2;
console.log(num1,num2);

if(isTrue) {
  //isTrue 의 참 => if블록 실행.
  console.log('참');
} else {
  console.log('거짓');
}