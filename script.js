// async function main(){
//   let promise = await fetch('https://jsonplaceholder.typicode.com/');
//   let data = promise.json();
//   return data;
// }
// let res = await main();
// console.log(res);

const API_KEY_WEATHER = "51e83a967be54ce010c8f61d164b65b0";
const API_KEY_IP = 'at_25BW0LHCv94wfihc7s7BE5vfYliZw';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=51e83a967be54ce010c8f61d164b65b0&unit=metric?'

const findCityButton = document.getElementById('find-city-button');

// const { latitude, longitude } = coords;
// const coords = {
//   latitude: GeolocationPosition.coords.latitude,
//   longitude: GeolocationPosition.coords.longitude
// };
// const queryParams = `?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHER}&units=metric`;
// const weatherElement = document.getElementById('weather-degree');
// const errorElement = document.getElementById('error');

// Функция для получения погоды по координатам
// function getWeatherByCoords2(coords) {

//   fetch(`${url}${queryParams}`)
//     .then(response => response.json())
//     .then(data => {
//       // Обработка полученных данных
//       weatherElement.innerHTML = `Temperature: ${data.main.temp}°C`;
//     })
//     .catch(error => {
//       // Обработка ошибки
//       errorElement.innerHTML = 'we donno(((';
//       errorElement.style.display = 'block';
//     });
// }

/// получить координаты браузер api
// const successCallback = (position) => {
//   console.log(position);
// };
// const errorCallback = (error) => {
//   console.log(error);
// };

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

findCityButton.addEventListener('click', event => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        // Обработчик успешного получения координат
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        
        function showWeather(lat, lon) {
          fetch(`${url}&lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.error(error)); 
        };
        
        function displayWeather(weatherData) {
          const weatherElement = document.getElementById('weather-degree');
          weatherElement.innerText = `Temperature: ${weatherData.main.temp.toFixed(1)}°C`;
        }
        
        showWeather(lat, lon);


      },
      error => {
        // Обработчик ошибки
        console.error('error');
      }
    );
  } else {
    console.error("geolocation doesn't support in your browser");
  }
});



// Функция для получения погоды по координатам
// async function getWeatherByCoords(coords) {
//   let responce = await fetch(url); 
//   console.log(responce);

//   let data = await responce.json(); 
//   console.log(data);
// }
// getWeatherByCoords(coords);

// 
// async function getWeatherByCoords(coords) {
//   const { latitude, longitude } = coords;
//   const queryParams = `?lat=${latitude}&lon=${longitude}&appid=51e83a967be54ce010c8f61d164b65b0&units=metric`;

//   try {
//     const response = await fetch(`${url}${queryParams}`);
//     const data = await response.json();

//     const weatherElement = document.getElementById('weather-degree');
    
//     weatherElement.innerHTML = `Temperature: ${data.main.temp}°C`;
//   } catch (error) {
//     const errorElement = document.getElementById('error');
//     errorElement.innerHTML = 'we donno(((';
//     errorElement.style.display = 'block';
//   }
// }
