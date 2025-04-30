//object5.js
//Date 객체 : 날짜, 시간

let now = new Date(1000); //Date 값에 1000당 1초씩 누적(값이 0일때  : 1970년 1월 1일 오전 9시)
// now = new Date("05-05/2024");
// now.setDate(21);
console.log(now);
console.log(now.getDate() + "일은 " + getKorDay(now.getDay())); //4월30일
// 요일 : getDay() 0(sun) 1(mon) 2(tue) ......6(sat)

function getKorDay(day = 1) {
  switch (day) {
    case 0:
      return "일요일";
    case 1:
      return "화요일";
    case 2:
      return "월요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
  }
}