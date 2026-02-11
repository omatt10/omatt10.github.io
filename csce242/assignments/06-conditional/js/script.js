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
  document.getElementById("time-till").style.display = section === "time-till" ? "block" : "none";
  document.getElementById("countdown").style.display = section === "countdown" ? "block" : "none";
}
