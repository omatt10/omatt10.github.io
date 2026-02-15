function toggleMenu() {
  const items = document.getElementById("menuItems");
  const arrow = document.getElementById("arrow");

  if (items.style.display === "block") {
    items.style.display = "none";
    arrow.textContent = "▼";
  } else {
    items.style.display = "block";
    arrow.textContent = "▲";
  }
}

function showSection(section) {
  const timeSection = document.getElementById("time");
  const countdownSection = document.getElementById("countdown");

  if (section === "time") {
    timeSection.style.display = "block";
    countdownSection.style.display = "none";
  } else if (section === "countdown") {
    timeSection.style.display = "none";
    countdownSection.style.display = "block";
    updateCountdown();
  }
}

// Exercise 1: Slider
const speedRange = document.getElementById("speedRange");
const sliderValue = document.getElementById("sliderValue");
const timeMessage = document.getElementById("timeMessage");

if (speedRange) {
  updateTimeMessage(speedRange.value);

  speedRange.addEventListener("input", function () {
    updateTimeMessage(this.value);
  });
}

function updateTimeMessage(minutes) {
  minutes = parseInt(minutes);

  if (sliderValue) {
    sliderValue.textContent = minutes;
  }

  let message = "";

  if (minutes > 45) {
    message = `Let's have bacon and eggs for a hearty breakfast!`;
  } else if (minutes >= 30 && minutes <= 45) {
    message = `Perfect time for coffee and a light snack!`;
  } else if (minutes >= 15 && minutes < 30) {
    message = `Better start getting ready soon!`;
  } else {
    message = `Hurry up! Class is starting very soon!`;
  }

  if (timeMessage) {
    timeMessage.textContent = message;
  }
}

// Exercise 2: Countdown
function updateCountdown() {
  const now = new Date();
  //0 is Sunday, 2 is Tuesday, and 4 is thursday
  const dayOfWeek = now.getDay();

  if (dayOfWeek !== 2 && dayOfWeek !== 4) {
    document.getElementById("currentTime").textContent =
      now.toLocaleTimeString();
    document.getElementById("countdownMessage").textContent =
      "No class today! Next class is Tuesday or Thursday at 8:30 AM.";
    return;
  }

  const classTime = new Date();
  classTime.setHours(8, 30, 0, 0);

  const minutesDiff = Math.floor((classTime - now) / 60000);

  document.getElementById("currentTime").textContent = now.toLocaleTimeString();

  let message = "";
  if (minutesDiff > 15) message = `${minutesDiff} minutes until class. Relax!`;
  else if (minutesDiff >= 10)
    message = `${minutesDiff} minutes until class. Start heading out!`;
  else if (minutesDiff >= 5)
    message = `${minutesDiff} minutes until class. Pick up the pace!`;
  else if (minutesDiff >= 0)
    message = `${minutesDiff} minutes until class. RUN!`;
  else if (minutesDiff >= -5)
    message = `Class started ${Math.abs(minutesDiff)} minutes ago! Sprint!`;
  else if (minutesDiff >= -15)
    message = `Class started ${Math.abs(minutesDiff)} minutes ago. Better late than never!`;
  else
    message = `Class started ${Math.abs(minutesDiff)} minutes ago. You might want to send an email.`;

  document.getElementById("countdownMessage").textContent = message;
  setTimeout(updateCountdown, 1000);
}

// Show Exercise 1 by default
window.onload = function () {
  showSection("time");
};
