let currentDate = new Date();

  let daysOfTheWeek = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

  function recentDayOfWeek(){
    let currentDayOfTheWeek = currentDate.getDay();

  let currentDayName = daysOfTheWeek[currentDayOfTheWeek];

  let today = document.getElementById("currentDayOfTheWeek");
  today.style = "font-size:20px;";

 let todayValue ="Day of the Week : " + currentDayName;

  today.innerText = todayValue

  }
  recentDayOfWeek();
  setInterval(recentDayOfWeek, 86400000);


function time (){
  const currentUTC = new Date().toUTCString();
  let timeInUTC = document.getElementById("currentUTCTime");
  timeInUTC.style = "font-size:20px;";

  timeInUTC.innerText = currentUTC;


}
  time();