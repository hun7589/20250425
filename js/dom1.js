//dom1.js

//createElement(),appendChild(),setAttribute(),querySelector()


///////
////이벤트
document.querySelector(`#addBtn`).addEventListener(`click`, addCallback);

//삭제버튼들.
document.querySelectorAll(`ul button`).forEach(function(item){
  console.log(item);
  item.addEventListener(`click`,function(){
    item.parentElement.remove(); //요소 삭제.
  })
});

//li에 스타일 입히기.

document.querySelectorAll('li').forEach(item=>{
  console.log(item);
  item.addEventListener(`mouseover`,function(){
    item.style.backgroundColor = "cyan";
  })
  item.addEventListener(`mouseout`,function(){
    item.style.backgroundColor = "";
  })
});


function addCallback() {
  let fruit = document.getElementById(`fruit`).value;
  let price = document.querySelector(`#price`).value;

    //입력값의 유무를 체크.
    if(!fruit||!price){
      alert(`입력하쇼`);
      return; //함수의 실행 종료.
    }

  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList);

  //입력값 초기화.
  document.getElementById(`fruit`).value = "";
  document.querySelector(`#price`).value = 0;
};

function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li"); //<li>
  // li.innerText = "test";
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + "원";
  let txt = document.createTextNode(" ");

  //삭제버튼.
  let btn = document.createElement("button"); //<button id ="delBtn" class="btn btn-danger">삭제</button>  ==> 어트리뷰트.
  btn.innerText = "삭제";
  btn.className= "btn btn-danger";
  btn.addEventListener(`click`,function(){
    btn.parentElement.remove();
  })

  li.appendChild(sp1);
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);


  return li; //<li /> 반환.
} //end of createLi().

// console.log(li);