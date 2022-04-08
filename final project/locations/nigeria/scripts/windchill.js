
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=lagos&units=imperial&appid=3f80ad643b1ab0f399aea373e0e5e884";
let temperature,windSpeed;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        // console.log(jsonObject)
        const iconSrc = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        document.querySelector("#weather-description").textContent = desc;
        document.querySelector("#temperature").textContent = jsonObject.main.temp;
        temperature = jsonObject.main.temp;
        windSpeed = jsonObject.wind.speed;
        document.querySelector("#wind-speed").textContent = windSpeed;
        document.querySelector("#weather-icon").setAttribute("src", iconSrc);
        document.querySelector("#weather-icon").setAttribute("alt", desc);
        
        const calculateWindChill = (t, s) => {
            if( t <= 50 && s >3){
            let windChill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (.4275 * t * (s ** .16));
            return windChill.toFixed(2)
            } else {
                return  "N/A"
            }
        }
        
        let windChill = document.getElementById('wind-chill');
        
        windChill.innerHTML = calculateWindChill(temperature, windSpeed);
    })

