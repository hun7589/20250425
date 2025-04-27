//condition6.js

//1. 두 수를 입력, 그 중 큰 값을 콘솔에 출력. "ex)두 수 중에서 더 큰 값은 28입니다."

let m = prompt("수를 입력하시오.");
let n = prompt("수를 입력하시오.");

if (m > n) {
    console.log("두 수 중에서 더 큰 값은 " + m + " 입니다.");
} else if (n < m) {
    console.log("두 수 중에서 더 큰 값은" + n + "입니다.");

}




//2. 임의의 2개의 수(40~70)를 생성하여 둘 중 큰 값은 얼마이고 작은 값은 얼마인지 나타내기.

function x(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function y(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = parseInt(x(40, 70));
let b = parseInt(y(40, 70));

if (a > b) {
    console.log(a + "와" + b + "중에 더 큰 값은" + a + "입니다.");
} else if (a == b) {
    console.log(a + "와" + b + " 는 같은 값 입니다.");
} else {
    console.log(a + " 와" + b + " 중에 더 큰 값은" + b + "입니다.");

}



console.log(a);
console.log(b);




// 3.condition3.js에 "A","B","C","D","F"  => 기준점+5 = +등급 매기기 EX) X>=95==A+ / >X>=85 == B+


let result = 30 + Math.floor(Math.random() * 71);

console.log("이번 시험 점수는 " + result + "점 입니다.");

if (result >= 95) {
    console.log("A+");
} else if (result >= 90) {
    console.log("A");
} else if (result >= 85) {
    console.log("B+");
} else if (result >= 80) {
    console.log("C+")
} else if (result >= 75) {
    console.log("C")
} else if (result >= 70) {
    console.log("D+")
} else {
    console.log("F")
}




// 4.반복문 537페이지 연습하기.