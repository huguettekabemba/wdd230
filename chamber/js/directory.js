const requestURL = 'https://huguettekabemba.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('#cards');
const list = document.querySelector('#list');

fetch(requestURL)
 .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      const directory = jsonObject['directory'];
      directory.forEach(displayCards);
      directory.forEach(displayList);
  });

function displayCards(company) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('p');

    logo.setAttribute('src', company.imageurl);
    logo.setAttribute('class', 'company_logo')

    address.textContent = company.address;
    phone.textContent = company.phone;
    site.textContent = company.site;
    
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);

    cards.appendChild(card);
}

function displayList(company) {
    let item = document.createElement('li');
    let site = document.createElement('a');
    item.textContent = `${company.name} | ${company.address} | ${company.phone} | `;
    site.setAttribute('href', company.site);
    site.textContent = company.site;
    item.appendChild(site);
    list.appendChild(item)
}

const button = document.querySelector('#view');
button.onclick= swapView;

function swapView() {
    console.log('triggered')
    if (document.querySelector('#view').classList.contains('listview')) {
        document.querySelector('#cards').classList.add('cards');
        document.querySelector('#cards').classList.remove('null');
        document.querySelector('#list').classList.add('null');
        document.querySelector('#list').classList.remove('list');
        document.querySelector('#view').classList.add('cardview');
        document.querySelector('#view').classList.remove('listview');
    }
    else {
        document.querySelector('#list').classList.add('list');
        document.querySelector('#list').classList.remove('null');
        document.querySelector('#cards').classList.add('null');
        document.querySelector('#cards').classList.remove('cards');
        document.querySelector('#view').classList.add('listview');
        document.querySelector('#view').classList.remove('cardview');
    }
}


/*const requestURL = 'https://huguettekabemba.github.io/wdd230/chamber/data/data.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["business"];
    businesses.forEach(displayBusiness);
    loadSettings();
  });

function displayBusiness(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let imageLogo = document.createElement("img");
  let name = document.createElement("p");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");
  /*let webText = document.createElement("p");*/

  // Set values for image logo
  /*imageLogo.setAttribute("src", business.imageurl);
  imageLogo.setAttribute("alt", `${business.name} logo`);
  imageLogo.setAttribute("loading", "lazy");
  imageLogo.classList.add("card-logo");

  // Name, address, phone #
  name.textContent = business.name;
  address.textContent = business.address;
  phone.innerHTML = `<strong>${business.phone}</strong>`;

  // Web link
  let linkText = document.createTextNode(business.website);
  website.appendChild(linkText);
  website.title = business.name;
  website.href = business.website;
  website.target = "_blank";
  /*webText.appendChild(website);*/

  // Add elements to card
  /*card.appendChild(imageLogo);
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(phone);

}
  

// List view button click
function listView() {
  const cards = document.querySelectorAll(".card");

  for (const c of cards) {
    c.classList.add("card-list");
    c.classList.remove("card-grid");
    c.classList.remove("block");
    c.classList.remove("shadow");
  }

  let frame = document.querySelector(".business-cards");
  frame.classList.remove("grid");
  frame.classList.add("list");
  frame.classList.add("shadow");

  localStorage.setItem("view", "list");
}

// Grid view button click
function gridView() {
  const cards = document.querySelectorAll(".card");

  for (const c of cards) {
    c.classList.remove("card-list");
    c.classList.add("card-grid");
    c.classList.add("block");
    c.classList.add("shadow");
  }

  let frame = document.querySelector(".business-cards");
  frame.classList.add("grid");
  frame.classList.remove("list");
  frame.classList.remove("shadow");

  localStorage.setItem("view", "grid");
}

// LocalStorage settings
function loadSettings() {
  //Load Local Storage
  const v = localStorage.getItem("view");

  // Display welcome message based on last visit day
  if (v === null) {
    listView();
  } else {
    if (v === "list") {
      listView();
    } else {
      gridView();
    }
  }
}

// Add events
document.querySelector(".list-view-button").addEventListener("click", listView);
document.querySelector(".grid-view-button").addEventListener("click", gridView);*/
