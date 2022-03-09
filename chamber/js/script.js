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
var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector(".date").innerHTML = days[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();


//reminder on Wednesday
if (today.getDay() == 4) {
  document.getElementById("banner").style.display = "block";
}

// number of visits
function pagedays() {
  var date2 = d.getTime()
  var date1 = JSON.parse(window.localStorage.getItem('date1'))
  var timeDifference = parseInt((date2 - date1)/(1000 * 3600 * 24));
  window.localStorage.setItem('date1', JSON.stringify(date2));
  document.querySelector('#days').innerHTML = 'Days Since Last Visit: ' + timeDifference;
}
