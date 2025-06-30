let currentStep = 0;
const steps = document.querySelectorAll('.step');

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
  currentStep = index;
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    showStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 0) {
    showStep(currentStep - 1);
  }
}

document.getElementById('warrantyForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Warranty submitted!');
});
