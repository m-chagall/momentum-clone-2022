const API_KEY = "312a894e4bbfeac2f4021762890fa8f4";

function onGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=en&units=metric`;
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weather = document.querySelector("#weather h2");    
        const city = document.querySelector("#weather h4");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
        city.innerText = data.name;
        }));
}

function onGeoFail() {
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);

 