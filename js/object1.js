// object1.js
//객체지향(자바)+함수:컴파일. 함수기반(자바스크립트)+객체:인터프리터.
// 객체: this => 자기자신.




//this => 1.객체(객체를 가리킴.)  2. 함수(window객체) 3.이벤트(대상)
function sum() {


  console.log(this);
}
//함수호출.
sum();






let obj = {
  name: "이준영",
  age: 27,
  job: "한무당",
  showName: function () {
    console.log(this);
    return `이름은 ${this.name}입니다.` //this == 객체가 가지고있는 하위속성 name
  },
  setName(name) { //setName == function(name){}
    this.name = name;
  }
};
obj.setName("함길주");
let result = obj.showName();
console.log(result);

//class 생성
class Person {
  //name,age : 속성.
  //showName(),setName():메소드.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //메소드.
  showName() {
    return `이름은 ${this.name}입니다.`;
  }
  setName(name) {
    this.name = name;
  }
 
  showAge(age) {
    return `나이는 ${this.age}입니다.`;
  }
  setAge(age) {
    this.age = age;
  }
}
let num = 10;
let choi = new Person("최민식", 22); //인스턴스 생성.
choi.setName(`이준영`);
console.log(choi.showName());
choi.setAge(27);
console.log(choi.showAge());