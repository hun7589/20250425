//function8.js
console.log(json); //문자열
let data = JSON.parse(json); //json문자열 => 객체변환.
console.log(data); //객체


//button<삭제> 템플릿
let btnTemplate = "<button class='btn btn-danger' onclick ='deleteTr(event)'>삭제</button>"


let fields = ['id', 'first_name', 'gender', `salary`];

console.clear(); //로그 지우기.


//사원 목록(ul tag / table)을 출력. document

let elist = "<table class = 'table'><thead><tr>";
for (let field of fields) {
  // console.log(emp);
  elist += `<th>${field}</th>`;
}
elist += "</tr></thead><tbody>";
for (let emp of data) {
  // console.log(emp);
  elist += makeTr(emp);
}
elist += "</tbody></table>";
document.write(elist);




///////////////////////////////
////이벤트

//1,버튼클릭
document.querySelector(`button.btn-primary`)
  .addEventListener('click', function () {
    //입력값.
    let searchValue = document.querySelector(`#userValue`).value;
    let list = "";
    for (let emp of data) {
      if (searchValue.toLowerCase() == `all` || searchValue == emp.gender) {
        list += makeTr(emp);

      }
    }
    document.querySelector(`table.table>tbody`).innerHTML = list;
  });
//2. select "change"
document.querySelector(`select#selectGender`).addEventListener('change', function () {
  console.log(this);
  let gender = document.querySelector(`#selectGender`).value;
  let lists = "";
  for(let x of data){
    if(gender.toLowerCase() == `all` ||gender == x.gender){
      lists += makeTr(x);
      console.log(lists);
    } 

  }
  document.querySelector(`table.table>tbody`).innerHTML = lists;
})




// Tr을 생성하는 함수.

function makeTr(emp = {}) {
  let str = "<tr>";
  //속성.
  for (let field of fields) {
    // console.log(emp[field]); //emp['id'] == emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str+=`<td>${btnTemplate}</td>`
  str += "</tr>";
  return str;
}

function deleteTr(e){
  e.target.parentElement.parentElement.remove();
}



console.log(makeTr({
  id: "12",
  first_name: "kildong",
  email: "kildong@email.com"
}));