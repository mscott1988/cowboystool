
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

// Refrigerant Tracker form logic
const steps = Array.from(document.querySelectorAll('.step'));
let selectedRole, selectedEmployee, invoiceNum, refrigType;

document.getElementById('role').addEventListener('change', e => {
  document.getElementById('next-1').disabled = !e.target.value;
});
document.getElementById('next-1').addEventListener('click', () => {
  selectedRole = document.getElementById('role').value;
  showStep(2);
  populateEmployees();
});

function populateEmployees() {
  const emp = document.getElementById('employee');
  emp.innerHTML = '<option value=\"\" disabled selected>Select employee</option>';
  for (let i = 1; i <= 15; i++) {
    let opt = document.createElement('option');
    opt.value = `Employee ${i}`;
    opt.text = `Employee ${i}`;
    emp.add(opt);
  }
}

document.getElementById('employee').addEventListener('change', e => {
  document.getElementById('next-2').disabled = !e.target.value;
});
document.getElementById('next-2').addEventListener('click', () => {
  selectedEmployee = document.getElementById('employee').value;
  showStep(3);
});

document.getElementById('invoice').addEventListener('input', e => {
  document.getElementById('next-3').disabled = !e.target.value.trim();
});
document.getElementById('next-3').addEventListener('click', () => {
  invoiceNum = document.getElementById('invoice').value.trim();
  showStep(4);
});

document.querySelectorAll('.refrig-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    refrigType = btn.dataset.type;
    showStep(5);
    populateTanks();
}));

function populateTanks() {
  const t = document.getElementById('tank');
  t.innerHTML = '<option value=\"\" disabled selected>Select tank #</option>';
  for (let i = 1; i <= 10; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.text = `Tank ${i}`;
    t.add(opt);
  }
}

document.getElementById('tank').addEventListener('change', e => {
  document.getElementById('next-5').disabled = !e.target.value;
});
document.getElementById('next-5').addEventListener('click', () => showStep(6));

const amtEl = document.getElementById('amount');
const next6 = document.getElementById('next-6');
document.getElementById('increase').addEventListener('click', () => adjustAmount(0.5));
document.getElementById('decrease').addEventListener('click', () => adjustAmount(-0.5));

function adjustAmount(delta) {
  let val = parseFloat(amtEl.value) + delta;
  val = Math.min(Math.max(val, 0), 25.5);
  amtEl.value = val.toFixed(1);
  next6.disabled = !(val > 0);
}

next6.addEventListener('click', () => showStep(7));

const sigEl = document.getElementById('signature');
const subBtn = document.getElementById('submit-btn');
sigEl.addEventListener('input', e => { subBtn.disabled = !e.target.value.trim(); });

document.getElementById('tracker-form').addEventListener('submit', e => {
  e.preventDefault();
  const body = encodeURIComponent(
    `Role: ${selectedRole}\nEmployee: ${selectedEmployee}\nInvoice #: ${invoiceNum}\nType: ${refrigType}\nTank #: ${document.getElementById('tank').value}\nAmount Used: ${amtEl.value} lbs\nSignature: ${sigEl.value.trim()}`
  );
  window.location.href = `mailto:warehouse@cowboysac.com,michael@cowboysac.com,alfonso@cowboysac.com?subject=${encodeURIComponent('Refrigerant Usage Log')}&body=${body}`;
});

function showStep(n) {
  steps.forEach((s, i) => s.style.display = (i === n-1 ? 'block' : 'none'));
}
showStep(1);
