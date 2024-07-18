document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiKey = '5f4f9c669b8ca3e79ec19e2002b2a81d';  // Replace with your actual OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('weatherDescription').textContent = data.weather[0].description;
            document.getElementById('humidity').textContent = data.main.humidity;
            document.getElementById('windSpeed').textContent = data.wind.speed;
            document.getElementById('weatherResult').classList.remove('hidden');
        } else {
            alert('City not found. Please enter a valid city name.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data. Please try again later.');
    }
}
