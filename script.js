// Update date & time
function updateDateTime() {
  const now = new Date();
  document.getElementById('current-datetime').textContent = now.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 60000);

// Fetch weather for zip 78216
async function fetchWeather() {
  const weatherElem = document.getElementById('weather-info');
  try {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // replace with your key
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=78216,us&appid=${apiKey}&units=imperial`
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    weatherElem.textContent = `${Math.round(data.main.temp)}°F ${data.weather[0].main}`;
  } catch {
    weatherElem.textContent = 'Weather unavailable';
  }
}
fetchWeather();