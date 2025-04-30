//object4.js
//filter()

let numAry = [20, 27, 33, 42, 19, 63, 52]
let filterAry = numAry.filter(function(item,idx,ary){
  if(item%2==0){
  return true;
  }
  return false;
});

console.log(filterAry);