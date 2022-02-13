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



//const fBase = document.querySelector(".fb");
//const fMed = document.querySelector(".fm");
//const fLarge = document.querySelector(".fl");



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


//fBase.innerHTML = `<strong>&copy; ${year} SA-DRC Chammber <br> Huguette kabemba n. <br> WDD 230 Project <br> Last Modification: ${document.lastModified} </strong>`;
//fMed.innerHTML = `<strong>&copy; ${year} SA-DRC Chammber | Huguette kabemba n. | WDD 230 Project |<br> Last Modification: ${document.lastModified} </strong>`;
//fLarge.innerHTML = `<strong>&copy; ${year} SA-DRC Chammber | Huguette kabemba n. | WDD 230 Project | Last Modification: ${document.lastModified} </strong>`;

document.querySelector(".date").innerHTML = `<p><strong>${dayName}, ${dateNum} ${monthName} ${year}</strong></p>`;

const banner = document.querySelector('#banner');
weekday = d.getDay();
if (weekday == 0 || weekday == 3 || weekday == 4 || weekday == 5 || weekday == 6){
    banner.classList.toggle("open");
};