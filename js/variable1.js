    //JS 주석문.
    /*
      주석문: 486p ~ 489p 읽기.
    */
    /*데이터베이스 관리 시스템(DBMS) - 오라클
    정보 -> FRONTEND -> BACKEND -> oracle
    변수(variable) - 데이터타입(문자,숫자,boolean,object,배열)*/
    let name; //변수 선언  중복선언x.
    name="이창호"; //값을 대입.
    let name1;
    name1="홍길동"; //변수 초기화.
    console.log(name);
    console.log(name1);
    const age = 20; //변수선언 & 초기화.
    console.log(age)
    // age = 30; //30 할당.
    // 변수를 바꾸고 싶다면 let /  영구적으로 고정시킬땐 const
   
    // 선택자(selector)
    let item = document.querySelector('#userValue');
    console.log(item);
    name=item.value; // 변수에 값을 할당.
    console.log(name);


    const PI = 3.14;
    let RADIUS = prompt("반지름을 입력하세요.");
    let AREA = PI*RADIUS*RADIUS;
    console.log(AREA);