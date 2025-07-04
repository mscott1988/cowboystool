// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Update Date & Time
  const dateElem = document.getElementById('date-time');
  function updateTime() {
    const now = new Date();
    dateElem.textContent = now.toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  }
  updateTime();
  setInterval(updateTime, 60000);

  // Update Weather (stub—add your API call here)
  const weatherElem = document.getElementById('weather');
  // Example: fetch weather from OpenWeatherMap if you have an API key
  // fetch(`https://api.openweathermap.org/data/2.5/weather?...`)
  //   .then(res => res.json())
  //   .then(data => { weatherElem.textContent = data.weather[0].description; });

  // Installs Today logic (stub)
  const installsElem = document.getElementById('installs-today');
  // You can fetch or update this value dynamically from your backend
  installsElem.textContent = 'Installs Today: ' + 0;
});