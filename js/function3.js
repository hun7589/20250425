//function3.js
//1. max(10,7)  => "두 수 중에서 큰 값은 10입니다."

function max(m, n) {
  if (m > n) {
    console.log(`두 수 중에서 큰 값은 ${m}입니다.`);
    document.write(`<p>두 수 중에서 큰 값은 ${m}입니다.</p>`);
  } else if (m < n) {
    console.log(`두 수 중에서 큰 값은 ${n}입니다.`);
    document.write(`<p>두 수 중에서 큰 값은 ${m}입니다.</p>`);
  } else {
    console.log(`두 수의 값은 같습니다.`);
    document.write(`<p> 수의 값은 같습니다.</p>`);
  }
}
max(10, 7)

//2. sumUpTo(x) => 1부터 7까지의 합은 22입니다.
function sumUpTo(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += i
  }
  console.log(`1부터 ${x}까지의 합은 ${sum}입니다.`);
  document.write((`<p>1부터 ${x}까지의 합은 ${sum}입니다.</p>`));
}
sumUpTo(11);

//3. diff(34,17) => 두 수의 차는 17입니다.
function diff(a, b) {
  let result = 0;
  if (a >= b) {
    result = Math.min(a - b);
  } else {
    result = Math.min(b - a);
  }
  console.log(`두 수의 차는 ${result}입니다.`);
  document.write((`<p>두 수의 차는 ${result}입니다,`));
}
diff(33,55)