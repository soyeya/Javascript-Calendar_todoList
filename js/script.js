let today = new Date();
const dates = today.getDate();
const days  = today.getDay();
var first = new Date(today.getFullYear(), today.getMonth(), 1); //년,월,1일 설정
console.log(first.getMonth());
console.log(today.getMonth());

const Days_array = [ "Sunday",  "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday", "Saturday"];
const Month_array = [ "January" , "February" , "March" , "April" , "May" , "Jun" , "July" , "August" , "September" , "Octobor" , "November" , "December"]

const Today_date = document.getElementById("resultDate");
const Today_day = document.getElementById("resultDay");
let Today_year = document.querySelector(".year");
let Today_month = document.querySelector(".monthBox");
let month_Cont = document.querySelector(".calendar_Content li");
const calendar_days = document.querySelector(".calendar_Date");

//윤월에 따른 달력페이지 설정
const leapYear = [31,29,31,30,31,30,31,31,30,31,30,31]
const leapNotyear = [31,28,31,30,31,30,31,31,30,31,30,31]

let pageFrist = first;
console.log(pageFrist);

let pageYear;

if(first.getFullYear() % 4 === 0){

    pageYear = leapYear;

}else{

    pageYear = leapNotyear;
}

console.log(pageYear[first.getMonth()]);

    Today_month.innerHTML = Month_array[first.getMonth()];
    Today_year.innerHTML = first.getFullYear();




// Calendar 표시
let calendarBody = document.querySelector(".calendar_Content");

function showCalendar(){

    let cnt = 1;
    let monthCnt = 100;

    for(i = 0; i < 6; i++){ //주 설정 -> 최대 5주
        
     let $week = document.createElement('li');
     $week.setAttribute('id' , monthCnt)

     for(var j = 0; j < 7; j++){ //일 설정 -> 주 7일

     if ((i === 0 && j < first.getDay()) ||  cnt > pageYear[first.getMonth()]){

       let $days = document.createElement('p');
       $week.append($days);

      }else{

       let $days = document.createElement('p');
       $days.textContent = cnt;
       $days.setAttribute('id' , cnt);
       $week.append($days);
       cnt++;

      }

     }

     monthCnt++;
     calendarBody.append($week);

    }
   
}

showCalendar();

//달력 삭제

function del_Canlendar(){

    let catchWeek = 100;
    for(var i = 0; i < 106; i++){
      
        let $week = document.getElementById(catchWeek);
        $week.remove();
        catchWeek++;

    }
}

// 화살표 버튼 클릭시 달력 날짜 변경

const prevBtn  = document.querySelector(".prev");
const nextBtn  = document.querySelector(".next");

function prev(){

    inputBox.value = "";
    const $lists = document.querySelectorAll('.todoContent > li');

    $lists.forEach(function(e){
      
        e.remove();

    });

    const $btns = document.querySelectorAll('.todoContent li > span');

    $btns.forEach(function(e1){
      
        e1.remove();

    });
    
    if(pageFrist.getMonth() === 1){
 
        console.log(pageFrist.getMonth());

        //1이 되고나서 한번 더 클릭해야 적용됨
        pageFrist = new Date(first.getFullYear()-1 , 12, 1);
        first = pageFrist;
        console.log(pageFrist);

         if(first.getFullYear() % 4 === 0){

            pageYear = leapYear;
         }else{

            pageYear = leapNotyear;
         }
    }else{

        pageFrist = new Date(first.getFullYear() , first.getMonth()-1, 1);
        first = pageFrist;
        console.log(pageFrist.getMonth());
    };

    today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
    Today_month.innerHTML = Month_array[first.getMonth()];
    Today_year.innerHTML = first.getFullYear();
    showCalendar();
    del_Canlendar();
    leftCalendar();

    clickDate1 = document.getElementById(today.getDate());
    clickDate1.classList.add("active");
    clickStart();
    resetTodo();
};

function next(){

    inputBox.value = "";

  const $lists = document.querySelectorAll('.todoContent > li');

    $lists.forEach(function(e){
      
        e.remove();

    });

    const $btns = document.querySelectorAll('.todoContent li > span');

    $btns.forEach(function(e1){
      
        e1.remove();

    });
    
    if(pageFrist.getMonth() === 12){
 
        console.log(pageFrist.getMonth());

        pageFrist = new Date(first.getFullYear()+1 , 1, 1);
        first = pageFrist;
        console.log(pageFrist);

         if(first.getFullYear() % 4 === 0){

            pageYear = leapYear;

         }else{

            pageYear = leapNotyear;
         }
    }else{

        pageFrist = new Date(first.getFullYear() , first.getMonth()+1, 1);
        first = pageFrist;
        console.log(pageFrist.getMonth());
    };

    today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
    Today_month.innerHTML = Month_array[first.getMonth()];
    Today_year.innerHTML = first.getFullYear();
    showCalendar();
    del_Canlendar();
    leftCalendar();

    clickDate1 = document.getElementById(today.getDate());
    clickDate1.classList.add("active");
    clickStart();
    resetTodo();
};


//날짜 클릭시 왼쪽 화면 변경

var clickDate1 = document.getElementById([today.getDate()]);
clickDate1.classList.add('active');

function leftCalendar(){

    Today_day.innerHTML =  Days_array[today.getDay()];
    Today_date.innerHTML = today.getDate();

}

leftCalendar();

prevBtn.addEventListener("click" , prev );
nextBtn.addEventListener("click" , next );

let dayGroup = [];

function clickStart(){

    for(let i = 1; i <= pageYear[first.getMonth()]; i++){

        dayGroup[i] = document.getElementById(i);
        dayGroup[i].addEventListener("click" , changeToday);
    }

}

clickStart();

function changeToday(e){

    for(let i = 1; i <= pageYear[first.getMonth()]; i++){

        if(dayGroup[i].classList.contains('active')){

            dayGroup[i].classList.remove('active');
            console.log("active 삭제");
        }
    }

    clickDate1 = e.currentTarget;
    console.log(clickDate1);
    clickDate1.classList.add("active");
    today = new Date(today.getFullYear(), today.getMonth(), clickDate1.id);
    leftCalendar();
    keyValue = today.getFullYear() + "" + today.getMonth() + "" + today.getDate();

    console.log("작동중");
    resetTodo();

};


//todoList 목록 업데이트 및 삭제

let inputBox = document.getElementById('inputBox');
let inputDate = document.getElementById('inputData');
let inputList = document.querySelector('.todoContent');

const delBtn = 'X';

inputDate.addEventListener("click" , addTodoList);

let dateCnt = 1;
let keyValue = today.getFullYear() + '' + today.getMonth() + '' + today.getDate();




function resetTodo(){

    keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();

    if(todoList[keyValue] === undefined){

        inputList.innerHTML = '';
        todoList[keyValue] = [];
        const $lists = document.querySelectorAll('.todoContent > li');
        $lists.forEach(function(e){

          e.remove();

        });

        const $btns = document.querySelectorAll('.todoContent li > span');

        $btns.forEach(function(e1){
          e1.remove();
        });

    }else if(todoList[keyValue].length === 0){

        inputList.innerHTML = '';
        const $lists = document.querySelectorAll('.todoContent > li');
        $lists.forEach(function(e){
          e.remove();
        });
        const $btns = document.querySelectorAll('.todoContent li > span');
        $btns.forEach(function(e1){
          e1.remove();
        });

    }else{
         const $lists = document.querySelectorAll('.todoContent > li');
            $lists.forEach(function(e){
              e.remove();
            });
            const $btns = document.querySelectorAll('.todoContent li > span');
            $btns.forEach(function(e1){
              e1.remove();
            });

            var $list = document.createElement('div');

            for(var i = 0; i < todoList[keyValue].length; i++){

                var $list = document.createElement('li');
                $list.textContent = '-' + todoList[keyValue][i];
                var $btn = document.createElement('span');
                $btn.setAttribute('id', dateCnt+keyValue);
                $btn.setAttribute('class', 'delete');
                $btn.textContent = delBtn;
                inputList.appendChild($list);
                $list.appendChild($btn);

                $list.addEventListener('click', checkList);
                $btn.addEventListener('click', deleteTodo);

                inputBox.value = '';

                function deleteTodo(){

                    $list.remove();
                    $btn.remove();
                    console.log($list);
                    console.log($btn);
        

                }
            }
        }
    
    }


let todoList = [];
todoList[keyValue] = [];

function addTodoList(){

    let $list = document.createElement('li');
    $list.textContent = inputBox.value;

    let $btn = document.createElement('span');
    $btn.setAttribute('class' , 'delete');
    $btn.setAttribute('id' , dateCnt+keyValue);
    $btn.textContent = delBtn;

    inputList.appendChild($list);
    $list.appendChild($btn);

    todoList[keyValue].push(inputBox.value);
    dateCnt++;
    inputBox.value = '';
    $list.addEventListener("click" , checkList);
    $btn.addEventListener("click" , deleteTodo);

    function deleteTodo(){

        $list.remove();
        $btn.remove();
    }

}

console.log(keyValue);

function checkList(e){

    e.currentTarget.classList.add('checked');
}









