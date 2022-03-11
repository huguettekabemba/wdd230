const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,units=imperial,uk&APPID=3f80ad643b1ab0f399aea373e0e5e884";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });