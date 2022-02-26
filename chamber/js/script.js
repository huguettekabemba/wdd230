// current year

const date = new Date();
let currentYear = date.getFullYear();
let homeYear = document.querySelector('#year');
homeYear.innerHTML = currentYear;

// last modification//

let lastModification = document.lastModified;
let lastTime = document.getElementById('lastmod');
lastTime.innerHTML = lastModification;


function toggleMenu() {
document.querySelector(".primary").classList.toggle("open");
document.querySelector("#ham").classList.toggle("open");
}
const x = document.querySelector("#ham");
x.onclick = toggleMenu;




//day names array
const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// month name array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const today = new Date();
const dayName = daynames[today.getDay()];
const monthName = months[today.getMonth()];
const dateNum = today.getDate();
const year = today.getFullYear();

document.querySelector("date").innerHTML = `<p><strong>${dayName} ${dateNum} ${monthName} ${year}</strong></p>`;

//reminder on Wednesday
if (today.getDay() == 4) {
  document.getElementById("banner").style.display = "block";
}

