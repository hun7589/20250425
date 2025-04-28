//variable2.js
let num1 = 100; // int num1;
num1 = "hundred";
console.log(typeof num1);
let num_2 = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date(); // o vs O == 서로 다른 값
console.log(typeof birthOfDate);

let isOK = true;
isOK = 10 < 5; //false값.
isOK = 10 > 5; //true값
if (isOK) {
  // isOK 값이 true 일 때, {} 블럭을 실행.
  console.log('isOK는 참입니다.');
} else {
  console.log('isOK는 거짓입니다.');
}

// 배열: [100, 200 250] 여러개의 값을 저장.
let numAry = [10, 20, 25, 31]; //index는 0부터 시작.
console.log(numAry[0]);

let strAry = ["H", "N", "G", 300]; //문자열과 숫자형의 혼합 사용 지양.

//객체(object). 키: 값의 형태.
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 50,
  personInfo: function () {
    console.log('이름은' + person.name + '이고 나이는' + person.age + '입니다')
  }
}
person.personInfo(); //method 호출(call)
// console.log(person.age);

//undefined, null
let whatIsThis; //변수지정x 선언만 되어 있는 상태(undefined)
whatIsThis = document.querySelector('#userValue');
console.log(typeof whatIsThis);


//variable3,js
//연산자(+,-,/,*)
// let num1 = document.querySelector('#num').value;
let a1 = document.querySelector('#num1').value;
let a2= document.querySelector('#num2').value;
a1 = parseInt(a1);
a2 = parseInt(a2);

let result = a1++ % --a2; //"30" + "17" = "3017"; 47
console.log(result, a1, a2);
// let result = parseInt(num1) + parseInt(num2);
console.log(result);
// let result = num1 + num2;
// document.querySelector('#result').value = result;