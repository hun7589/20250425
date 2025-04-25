// condition5.js
//switch ..case문

// let x = prompt("숫자 입력 하슈. ex: 1,2,3,4");

// switch (x) {
//   case "1":
//     console.log("1을 선택");
//     break;
//   case "2":
//     console.log("2를 선택");
//     break;
//   case "3":
//     console.log("3을 선택");
//     break;
//   case "4":
//     console.log("4를 선택");
//   default:
//     console.log("1,2,3,4중에 선택하라고");
// }

//30~100 사이의 임의의값

let i = 30 + parseInt(Math.random() * 71);
i = parseInt(i / 10); // 95/10 => 9.5
console.log(i+"0점");

switch (i) {
  case 10:
    console.log("A+");break;
  case 9:
    console.log("A");break;
  case 8:
    console.log("B");break;
  case 7:
    console.log("C");break;
  case 6:
    console.log("D");break;
  default: console.log("F");
}