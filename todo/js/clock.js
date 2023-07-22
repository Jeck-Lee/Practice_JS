const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const clock = document.querySelector(".clock");
const dateDiv = document.querySelector(".date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = hours + ":" + minutes + ":" + seconds;

  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  dateDiv.innerText = `${month} / ${day}`;
}

getClock();
setInterval(getClock, 1000);
