// current year

const date = new Date();

let currentYear = date.getFullYear();
let homeYear = document.querySelector('#year');

homeYear.innerHTML = currentYear;

// last modification

let lastModification = document.lastModified;

let lastTime = document.getElementById('lastmod');
lastTime.innerHTML = lastModification;

// current date with format: Wednesday, 24 July 2020.

const datefield = document.getElementById('currenttime')

const fulldate = new Intl.DateTimeFormat('en-Us',{
    dateStyle: "full"
}).format(date);

datefield.innerHTML = fulldate;

// remove responsive when the view is large

//window.onresize = () => {
 // if(window.innerWidth > 1000){
   // firstNav.classList.remove('open');
 //  button.classList.remove('open');
 //  }}