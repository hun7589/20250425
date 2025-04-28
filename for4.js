//for4.js

document.write(`<h3>구구단 TEST</h3>`);  //내용 출력.(구구단)
//<p> 3 * 1= 3<p>
//<p> 3 * 2= 6<p>
//<p> 3 * 3= 9<p>
//<p> 3 * 4= 12<p>
//.....<p> 3 * 9= 27<p>

let str = "";
str +="<table class='table table-striped'>";
str +="<tbody>";

  // document.write(`<h1>${i}단<h3>`);
 for(let i2=1;i2<10;i2++){
  str +="<tr>";
  for(let i=1;i<10;i++){
  str +=`<td>${i}</td><td>X</td><td>${i2}</td><td>=</td><td>${i*i2}</td>`;
 }
 str +="</tr>";
}
str +="<tbody>";
str +="</table>";
document.write(str);

