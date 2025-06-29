let currentStep = 0;
let steps = [];
let startTime;
let timerInterval;

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}

function startCooking() {
  steps = document.querySelectorAll("#steps li");
  if (steps.length === 0) return;

  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");

  currentStep = 0;
  steps[currentStep].style.backgroundColor = "#ffe0b3";

  // Start Timer
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);a
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    steps[currentStep].style.backgroundColor = "";
    currentStep++;
    steps[currentStep].style.backgroundColor = "#ffe0b3";
    updateProgress();
  } else {
    steps[currentStep].style.backgroundColor = "";
    document.getElementById("nextBtn").classList.add("hidden");
    clearInterval(timerInterval);
    alert("🎉 You're done!");
    updateProgress(100);
  }
}

function updateProgress(force = null) {
  let percent = force ?? ((currentStep + 1) / steps.length) * 100;
  document.getElementById("progress").style.width = percent + "%";
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById("timer").textContent = `Time: ${elapsed}s`;
}
