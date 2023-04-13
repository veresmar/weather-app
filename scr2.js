
// Получаем IP-адрес пользователя с помощью API сервиса ipify.org
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    const ipUrl = `https://geo.ipify.org/api/v1?apiKey=at_25BW0LHCv94wfihc7s7BE5vfYliZw&ipAddress=${ipAddress}`;
    console.log(ipAddress);
    
    // здесь можно использовать переменную ipAddress для формирования запроса к API сервиса геолокации
  })
  .catch(error => {
    console.error("Ошибка при получении IP-адреса: ", error);
  });
// const url = "https://api.openweathermap.org/data/2.5/onecall?lat=59.9274787&lon=30.3560611&appid=5ea900c9b61899b3040affe4180c998c&lang=en&unit=metric"
// const weather = fetch(url)
const url = `https://api.openweathermap.org/data/2.5/weather`;


// weather
//     .then(data => data.json())
//     .then(data=>console.log(data))

    
    // Функция для получения погоды по координатам
    function getWeatherByCoords(coords) {
      const { latitude, longitude } = coords;
      const queryParams = `?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHER}&units=metric`;
    
      fetch(`${url}${queryParams}`)
        .then(response => response.json())
        .then(data => {
          // Обработка полученных данных
          const weatherElement = document.getElementById('weather-degree');
          weatherElement.innerHTML = `Temperature: ${data.main.temp}°C`;
        })
        .catch(error => {
          // Обработка ошибки
          const errorElement = document.getElementById('error');
          errorElement.innerHTML = 'we donno(((';
          errorElement.style.display = 'block';
        });
    }
    


    ///
weatherButton.addEventListener('click', function() {
  
  getWeatherByCity(city);
});

function getWeatherByCity(city) {
  const queryParams = `?q=${city}&appid=${API_KEY_WEATHER}&units=metric`;
  
  fetch(`${url}${queryParams}`)
    .then(response => response.json())
    .then(data => {
      // Обработка полученных данных
      const weatherElement = document.getElementById('weather-degree');
      weatherElement.innerHTML = `Temperature: ${data.main.temp}°C`;
      const cityNameElement = document.querySelector('.city-name');
      cityNameElement.innerHTML = data.name;
    })
    .catch(error => {
      // Обработка ошибки
      const errorElement = document.getElementById('error');
      errorElement.innerHTML = 'we donno(((';
      errorElement.style.display = 'block';
    });
}

weatherButton.addEventListener('click', function() {
  const cityInputElement = document.getElementById('weather-degree');
  const city = cityInputElement.value;
  getWeatherByCity(city);
});
