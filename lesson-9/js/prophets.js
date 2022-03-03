
  // set the JSON source URL
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // checking for response
    const prophets = jsonObject['prophets'];
    //select output location
    const cards = document.querySelector('.cards');

    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let pimg = document.createElement('img');
        //use templet Literals
        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace}`;
        pimg.setAttribute('src', prophet.imageurl);
        pimg.setAttribute('alt', `${prophet.name} - ${prophet.order}`)

        card.append(h2);
        card.append(p);
        card.append(pimg);
        cards.append(card);
    });


        //creating a list of all the prophets born in Utah
        const utah = document.querySelector('.utah');

        const utahfilter = prophets.filter(x => x.birthplace == "Utah");

        utahfilter.forEach(utahprophet => {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let pimg = document.createElement('img');
            //use templet Literals
            h3.innerHTML = `${utahprophet.name} ${utahprophet.lastname}`;
            pimg.setAttribute('src', utahprophet.imageurl);
            pimg.setAttribute('alt', `Picture of ${utahprophet.name} who was born in ${utahprophet.birthplace} in the year ${utahprophet.birthdate.substring(utahprophet.birthdate.length - 4)}!`)
            card.append(h3);
            card.append(pimg);
            utah.append(card);
        });



  });
  