const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const dates = today.getDate();
const days  = today.getDay();

console.log(today);
console.log(year);
console.log(days);


const Days_array = [ "Sunday",  "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday", "Saturday"];
const Month_array = [ "January" , "February" , "March" , "April" , "May" , "Jun" , "July" , "August" , "September" , "Octobor" , "November" , "December"]

const Today_date = document.getElementById("resultDate");
const Today_day = document.getElementById("resultDay");
const Today_year = document.querySelector(".year");
const Today_month = document.querySelector(".monthBox");
const month_Cont = document.querySelector(".calendar_Content li");

function today_open(){

    Today_date.innerHTML = `<p>${dates} day</p>`;
    Today_day.innerHTML = `<p>${Days_array[days]}</p>`;
    Today_month.innerHTML = Month_array[month];
    Today_year.innerHTML = year;

    


}


window.onload = () => {

    today_open();
}


