//while3.js
//친구이름을 입력. => quit 종료.

//화면요소를 삭제하는 함수.
function removeElement(parameter1){
  console.dir(parameter1.target.parentElement.parentElement);
  parameter1.target.parentElement.parentElement.remove(); //제거.
}

let str = "";
str += "<table class='table table-striped'>";
let running = true;
while (running) {
  str += "<tr>";
  let x = prompt(`이름을 입력하시오.`);
  if (x == "quit"){
    running = false;
    continue;
  }

  str += `<tr><td>${x}</td><td><button onclick="removeElement(event)" class ='btn btn-danger'>삭제</button></td></tr>`;
  
}
str += `</tbody></table>`;
document.write(str);