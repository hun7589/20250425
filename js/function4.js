// function4.js
//함수+반복문+배열:


let x = 10;
x = "10,홍길동"; // 하나의 문자열.
let numAry = [10, 20]; // 배열   new Array(); 도 가능.
numAry[2] = 30; //배열 안에 추가입력.
numAry[3] = 50;
numAry[4] = "Hong"; //(x)
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;

console.log(numAry[3]); // 배열의 n번째 숫자 불러오기.
console.log(`배열의 크기: ${numAry.length}`);


//배열은 for반복문과 같이쓰기 좋음.

for (let i = 0; i < numAry.length; i++) {
  console.log(`[i]의 값 : ${i},배열의 값 : ${numAry[i]}`)
}


//연산기능
console.log(`numAry[6]-numAry[2] => ${numAry[6] - numAry[2]}`);

//배열 요소의 합
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  // if (i % 2 == 0) {
  //   sum += numAry[i];
  // }
  if (numAry[i] > 50) {
    sum += numAry[i]
  }
}
console.log(`sum=>${sum}`);

//배열변수 : ages 27,28,25,30,31,37
let ages = [27, 28, 25, 30, 31, 37];
let oldest = 0;
for (let i = 0; i < ages.length; i++) {
  if (oldest < ages[i]) {
    oldest = ages[i];

  }

}
console.log(`${oldest}이 제일 많은 나이입니다.`)



//함수 : getMax()

function getMax(param1 = []) {
  let oldest = 0;
  for (let i = 0; i < param1.length; i++) {
    if (oldest < param1[i]) {
      oldest = param1[i];

    }

  }
  console.log(`${oldest}이 제일 많은 나이입니다.`);
  document.write(`<p>${oldest}이 제일 많은 나이입니다.</p>`);

}
getMax(ages);
getMax([50, 22, 36, 88, 55, 41, 2, 59]);



//함수 :getMinValue(매개값으로 배열)  제일 작은값을 반환;



function getMinValue(param1 = []) {
  let min = param1[0];   //최소값 지정.
  for (let i = 0; i < param1.length; i++) {
    if (min > param1[i]) {
      min = param1[i];

    }

  }
  return min;
}
let reslut = getMinValue([20, 27, 17, 2]);
console.log(`결과는 ${reslut}`);
console.log(`결과는 ${getMinValue(ages)}`)