let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1);
num2 = parseInt(num2);
num1++;
num1++;
num1++;

let result = ++num1 + --num2;
console.log(result, num1, num2);

document.querySelector('#result').value = result;