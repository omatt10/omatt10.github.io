// Nav Toggle
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      navToggle.classList.remove("active");
    });
  });
}

// Gender Toggle (Home page)
const toggleBtns = document.querySelectorAll(".toggle-btn");
toggleBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    toggleBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

// Running Calculator
function calculateCalories() {
  const weight = parseFloat(document.getElementById("weight")?.value);
  const duration = parseFloat(document.getElementById("duration")?.value);
  const met = parseFloat(document.getElementById("pace")?.value);

  if (!weight || !duration || isNaN(met)) {
    alert("Please fill in all fields.");
    return;
  }

  const weightKg = weight * 0.453592;
  const calories = Math.round(met * weightKg * (duration / 60));
  const speedMap = { 6: 5, 9: 6, 11: 7.5, 13: 9 };
  const paceMap = {
    6: "Slow Jog",
    9: "Moderate Run",
    11: "Fast Run",
    13: "Sprint",
  };
  const speed = speedMap[String(met)] || 6;
  const distance = ((speed * duration) / 60).toFixed(2);
  const paceLabel = paceMap[String(met)] || "Moderate Run";

  document.getElementById("calories-result").textContent = calories;
  document.getElementById("duration-result").textContent = duration + " min";
  document.getElementById("distance-result").textContent = distance + " mi";
  document.getElementById("pace-result").textContent = paceLabel;
}

// Lightbox Gallery
const galleryImages = [];
let currentIndex = 0;

document.querySelectorAll(".gallery-item").forEach(function (item) {
  const img = item.querySelector("img");
  const caption = item.querySelector(".gallery-overlay span");
  galleryImages.push({
    src: img ? img.src : "",
    caption: caption ? caption.textContent : "",
  });
});

function openLightbox(src, caption) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  if (!lightbox) return;
  currentIndex = galleryImages.findIndex(function (item) {
    return item.src.includes(src.replace("../", "")) || item.caption === caption;
  });
  if (currentIndex === -1) currentIndex = 0;
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox(event) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  if (!event || event.target === lightbox || event.target.classList.contains("lightbox-close")) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function changeImage(direction) {
  if (galleryImages.length === 0) return;
  currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
  const item = galleryImages[currentIndex];
  document.getElementById("lightbox-img").src = item.src;
  document.getElementById("lightbox-img").alt = item.caption;
  document.getElementById("lightbox-caption").textContent = item.caption;
}

document.addEventListener("keydown", function (e) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox || !lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "ArrowLeft") changeImage(-1);
});

// Recipe Toggle
function toggleRecipe(card) {
  const detail = card.querySelector(".recipe-detail");
  const btn = card.querySelector(".recipe-expand-btn");
  if (!detail) return;
  const isOpen = detail.classList.contains("open");
  detail.classList.toggle("open");
  if (btn) btn.textContent = isOpen ? "View Recipe ↓" : "Hide Recipe ↑";
}

// ============================================
// PART 7 ADDITIONS
// ============================================

// JSON Recipe Loader
async function loadRecipesFromJSON() {
  const container = document.getElementById("recipe-json-container");
  const JSON_URL = "https://omatt10.github.io/csce242/project/part-7/json/recipes.json";

  container.innerHTML = '<p class="json-loading">Loading recipes...</p>';

  try {
    const response = await fetch(JSON_URL);
    if (!response.ok) throw new Error("Failed to fetch");
    const recipes = await response.json();
    renderRecipes(recipes, container);
  } catch (err) {
    container.innerHTML = '<p class="json-error">⚠️ Could not load recipes. Make sure the JSON file is published on GitHub Pages and the URL in script.js is correct.</p>';
    console.error("JSON fetch error:", err);
  }
}

function renderRecipes(recipes, container) {
  container.innerHTML = "";
  recipes.forEach(function (recipe) {
    const card = document.createElement("div");
    card.className = "recipe-json-card";
    card.innerHTML = `
      <img
        src="../${recipe.img_name}"
        alt="${recipe.name}"
        class="recipe-json-img"
        onerror="this.src='../images/recipes.png'"
      />
      <div class="recipe-json-body">
        <span class="recipe-json-badge">${recipe.category}</span>
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <div class="recipe-json-macros">
          <span><strong>${recipe.calories}</strong> cal</span>
          <span><strong>${recipe.protein}g</strong> protein</span>
          <span><strong>${recipe.carbs}g</strong> carbs</span>
          <span><strong>${recipe.fat}g</strong> fat</span>
        </div>
        <p class="recipe-json-time">⏱ Prep: ${recipe.prep_time}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Call AFTER the function is defined
if (document.getElementById("recipe-json-container")) {
  loadRecipesFromJSON();
}

// Contact Form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const successMsg = document.getElementById("form-success");
    const errorMsg = document.getElementById("form-error");
    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const submitBtn = contactForm.querySelector(".contact-submit-btn");
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/YOUR_EMAIL@example.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: document.getElementById("contact-name").value,
            email: document.getElementById("contact-email").value,
            subject: document.getElementById("contact-subject").value,
            message: document.getElementById("contact-message").value,
          }),
        }
      );

      const data = await response.json();
      if (data.success === "true" || response.ok) {
        successMsg.style.display = "flex";
        contactForm.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      errorMsg.style.display = "flex";
    } finally {
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
    }
  });
}