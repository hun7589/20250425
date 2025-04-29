//function7.js
console.log(friends)
// 함수 makeRow(friends={})

let friend = {
  name: "김민규",
  age: 20,
  phone:"010-1111-2222"
}
//for...in 객체의 속성반복.
for(let prop in friend){
  console.log(`prop: ${prop}, val:${friend[prop]}`);
}

function makeRow(friend = {name,age,phone}){
  let str = "";
  str += "<tr>";
  for(let a in friend){
    str += `<td>${friend[a]}</td>`;
  }
  str += "</tr>";
  return str;
}
let title =["이름","나이","연락처"];
let tlist = "";
tlist += "<table class='table'>";
tlist += "<thead>"
for(let x in title){
  tlist += `<th>${title[x]}</th>`
}
tlist += "<tbody>";


// 데이터 -> row생성
// for(let i = 0; i<friends.length;i++){
  // tlist+=makeRow(friends[i]);
// }
// for...of => 배열반복.

for(let friend of friends){
  tlist+=makeRow(friend);
}
tlist += "</tbody></table>"

document.write(tlist);