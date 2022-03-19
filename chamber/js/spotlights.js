// set the JSON source URL
const requestURL = "https://huguettekabemba.github.io/wdd230/chamber/data/data.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // checking for response
    const directory = jsonObject['directory'];


        //creating spotlight1 inputs
        const spotlight1 = document.querySelector('.spotlight1');
        const spotlight1filter = directory.filter(x => x.name == "Scion Technologies");
        spotlight1filter.forEach(townpreston => {
            let town = document.createElement('section');
            let logo = document.createElement('img');
            let site = document.createElement('a');

            logo.setAttribute('src', townpreston.imageurl);
            logo.setAttribute('class', 'company_logo');
            site.setAttribute('href', townpreston.site);
            site.setAttribute('target','_blank');
            //use templet Literals
            logo.innerHTML = `${townpreston.imageurl}`;
            site.innerHTML = `${townpreston.site}`;
            town.append(logo);
            town.append(site);
            spotlight1.append(town);
        });

        //creating spotlight2 inputs
        const spotlight2 = document.querySelector('.spotlight2');
        const spotlight2filter = directory.filter(x => x.name == "Mukuru");
        spotlight2filter.forEach(spotl2 => {
            let town = document.createElement('section');
            let logo = document.createElement('img');
            let site = document.createElement('a');

            logo.setAttribute('src', spotl2.imageurl);
            logo.setAttribute('class', 'company_logo');
            site.setAttribute('href', spotl2.site);
            site.setAttribute('target','_blank');
            //use templet Literals
            logo.innerHTML = `${spotl2.imageurl}`;
            site.innerHTML = `${spotl2.site}`;
            town.append(logo);
            town.append(site);
            spotlight2.append(town);
        });


        //creating spotlight3 inputs
        const spotlight3 = document.querySelector('.spotlight3');
        const spotlight3filter = directory.filter(x => x.name == "DRC Mining Weeek");
        spotlight3filter.forEach(spotl3 => {
            let town = document.createElement('section');
            let logo = document.createElement('img');
            let site = document.createElement('a');

            logo.setAttribute('src', spotl3.imageurl);
            logo.setAttribute('class', 'company_logo');
            site.setAttribute('href', spotl3.site);
            site.setAttribute('target','_blank');
            //use templet Literals
            logo.innerHTML = `${spotl3.imageurl}`;
            site.innerHTML = `${spotl3.site}`;
            town.append(logo);
            town.append(site);
            spotlight3.append(town);
        });

  });