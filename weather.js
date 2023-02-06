 import "key.js";

let longitude;
let latitude;

document.addEventListener('DOMContentLoaded',() => {
    console.log('long et lat', longitude, latitude);
    if(longitude && latitude) {
         getapi()
    } else {
        getLocation()
    }
});

// Geo location
async function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude; 
    console.log('laaa');
    if (latitude && longitude) {
        getapi();
    }
}

// Defining async function
async function getapi() {
    console.log('Latitude', latitude);
    if(longitude && latitude) {
        const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=" + key +"&units=metric&lang=fr".replace("latitude", latitude).replace("longitude", longitude);
    
        // Storing response
        const response = await fetch(weatherAPI);
        // Storing data in form of JSON
        var data = await response.json();
        console.log("DATA", data);

        // Fetch town name
        ville = JSON.stringify(data.name);
        document.getElementById("ville").innerHTML = ville.slice(1,-1);

        // Fetch temperature with rounded value
        temperature = JSON.stringify(data.main.temp);
        document.getElementById("temperature").innerHTML = Math.round(temperature) + '°C';

        //Fetch max temperature 
        // maxTemp = JSON.stringify(data.main.temp_max);
        // document.getElementById("maxTemp").innerHTML = 'Temperature maximum ' + Math.round(maxTemp) + '°C';

        // //Fetch min temperature
        // minTemp = JSON.stringify(data.main.temp_min);
        // document.getElementById("minTemp").innerHTML = 'Temperature minimum ' + Math.round(minTemp) + '°C';

        //Use correct img source
        imageSrc = JSON.stringify(data.weather[0].icon);
        console.log('imageSrc', imageSrc.slice(1,-1));
        document.getElementById('icon-weather').src = "https://openweathermap.org/img/wn/imageSrc@2x.png".replace("imageSrc", imageSrc.slice(1,-1));

        // Fetch description 
        description = JSON.stringify(data.weather[0].description);
        description1 = description.slice(1,-1);
        description2 = description1[0].toUpperCase() + description1.slice(1);
        document.getElementById("description").innerHTML = description2;
    }
    
}

