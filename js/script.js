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
const month_Cont = document.querySelector(".calendar_Content li");
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



    Today_date.innerHTML = `<p>${dates} day</p>`;
    Today_day.innerHTML = `<p>${Days_array[days]}</p>`;
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
const inputBox = document.getElementById("inputBox");

prevBtn.addEventListener("click" , () => {

    inputBox.value = "";
    
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
});

nextBtn.addEventListener("click" , () => {

    inputBox.value = "";
    
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
})



