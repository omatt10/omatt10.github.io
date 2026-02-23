// Nav Toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("main-nav");
navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navToggle.classList.toggle("active");
});

// Running Calculator
function calculateCalories() {
  const weight = parseFloat(document.getElementById("weight").value);
  const duration = parseFloat(document.getElementById("duration").value);
  const met = parseFloat(document.getElementById("pace").value);
  const paceSelect = document.getElementById("pace");
  const paceText = paceSelect.options[paceSelect.selectedIndex].text;

  if (!weight || !duration) {
    alert("Please enter your weight and duration.");
    return;
  }

  const weightKg = weight * 0.453592;
  const hours = duration / 60;
  const calories = Math.round(met * weightKg * hours);

  const speedMap = { 6: 5, 9: 6, 11: 7.5, 13: 9 };
  const speed = speedMap[met] || 6;
  const distance = ((speed * duration) / 60).toFixed(1);

  document.getElementById("calories-result").textContent = calories;
  document.getElementById("duration-result").textContent = duration + " min";
  document.getElementById("distance-result").textContent = distance + " mi";
  document.getElementById("pace-result").textContent = paceText
    .split("(")[0]
    .trim();
}
