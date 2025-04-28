//variable4.js
//연산자(할당연산자 524p)

let num1 = "10";
num1 = num1 + "20";
num1 = num1 + "30";  //102030
console.log(num1);

num1 += "40"; // num1 = num1 + "40";

let num2 = 10; //number
num2 += 20;
num2 +=30;

num2 = num2 - 5; //55
num2 -= 5; //50
num2 = num2*2;
num2 = 10203040;
console.log(num2 == num1);  //동일.
console.log(num2 === num1); //다름.

console.log(num2!=num1); //값만 비교.
console.log(num2 !== num1); //값,타입 비교

console.clear();
console.log(num>=num2||num1<100);
console.log(num>=num2&&num1<100);
