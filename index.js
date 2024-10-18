// 15. DK
const apiKey = "beae74855eafa98753f400716c6a31cf";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?
appid=${apiKey}&units=metric&q=istanbul`;

async function checkWeather() {
    const response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;
}

checkWeather();