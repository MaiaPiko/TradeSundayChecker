const weekdays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];




const date = new Date();
const dayOfWeek = date.getDay()

function currentDate() {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let weekday = weekdays[dayOfWeek];
  let today = `${weekday} ${day}/${month}/${year}`;

  return today;
}


function nextSunday(){
    const daysRemaining = (7 - dayOfWeek) % 7;
    const nextSunday = new Date(date);

    return nextSunday
}


function nextSundayStr() {
    const daysRemaining = (7 - dayOfWeek) % 7;
    const nextSunday = new Date(date);
    nextSunday.setDate(date.getDate() + daysRemaining);
    const day = nextSunday.getDate();
    const month = nextSunday.getMonth() + 1;
    const year = nextSunday.getFullYear();
    const weekday = weekdays[0]; // Sunday
    const nextSundayStr = `${day}/${month}/${year}`;
  
    return nextSundayStr;
  }


  function isItSunday() {
  
    const sundayIndex = weekdays.indexOf("Niedziela");
    return dayOfWeek === sundayIndex;
  }
  
  
  export { currentDate, nextSundayStr, nextSunday, isItSunday };
