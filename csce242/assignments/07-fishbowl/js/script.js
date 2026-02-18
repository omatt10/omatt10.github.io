const bubblesLayer = document.getElementById("bubbles");
const containterHeight = bubblesLayer.offsetHeight;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function makeBubbles() {
  bubblesLayer.innerHTML = "";

  const bubbleCount = 10; // change to match the example

  //for loop to create bubbles
  for (let i = 0; i < bubbleCount; i++) {
    const b = document.createElement("div");
    b.className = "bubble";

    const size = rand(8, 18);
    const duration = rand(3.5, 7.5);
    const delay = rand(0, 3.5);

    // Random X position across the tank
    const maxX = bubblesLayer.clientWidth - size;
    const left = rand(0, Math.max(0, maxX));

    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
    b.style.left = `${left}px`;
    b.style.animationDuration = `${duration}s`;
    b.style.animationDelay = `${delay}s`;

    // each loop, pick a new random x (keeps it “random forever”)
    b.addEventListener("animationiteration", () => {
      const newSize = rand(8, 18);
      const newMaxX = bubblesLayer.clientWidth - newSize;
      b.style.width = `${newSize}px`;
      b.style.height = `${newSize}px`;
      b.style.left = `${rand(0, Math.max(0, newMaxX))}px`;
    });

    bubblesLayer.appendChild(b);
  }
}

// match assignment: bubbles appear when page loads
window.addEventListener("load", makeBubbles);
