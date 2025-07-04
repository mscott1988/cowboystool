// Set current date & time
function updateDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  document.getElementById('current-datetime').textContent = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Fetch weather using OpenWeatherMap API
async function fetchWeather() {
  try {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual key
    const zip = '78233';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`);
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const condition = data.weather[0].main;
    document.getElementById('weather-info').textContent = `${temp}°F ${condition}`;
  } catch (error) {
    document.getElementById('weather-info').textContent = 'Weather unavailable';
  }
}
fetchWeather();

// Static installs placeholder
const installs = 6;
document.getElementById('installs-count').textContent = installs;