// Associative arrays — key: song name, value: YouTube embed URL
const happy = {
  "West Savannah by Isaiah Rashad ft SZA":
    "https://www.youtube.com/embed/vor0Oph03Fg",
  "Could You Be Loved by Bob Marley & The Wailers":
    "https://www.youtube.com/embed/1ti2YCFgCoI",
  "Dance In The Dark by Rihanna":
    "https://www.youtube.com/embed/O1QVDIL12pU",
  "Dog Days Are Over by Florence + Machine":
    "https://www.youtube.com/embed/vDHr85LiwUM",
  "Rich Girl by Daryl Hall & John Oates":
    "https://www.youtube.com/embed/AmHE65RAkSY",
};

const sad = {
  "High No More":
    "https://www.youtube.com/embed/AQqL3ViB5nI",
  "I Drink Wine by Adele":
    "https://www.youtube.com/embed/jDvYDzFOK9A",
  "Cool About It by boygenius":
    "https://www.youtube.com/embed/G-XICfi4j3Q",
  "Who Knows by Dainel Ceaser":
    "https://www.youtube.com/embed/Wzn4BLtE73o",
  "Moon River by Frank Ocean":
    "https://www.youtube.com/embed/mXiFHDfvn4A",
};

// Grab elements
const moodSelect = document.getElementById("mood-select");
const songList = document.getElementById("song-list");
const videoFrame = document.getElementById("video-frame");

// When the mood dropdown changes
moodSelect.addEventListener("change", () => {
  const selected = moodSelect.value;

  // Clear old list and hide video
  songList.innerHTML = "";
  videoFrame.classList.add("hidden");
  videoFrame.src = "";

  // If nothing selected, stop here
  if (!selected) return;

  // Pick the right array
  let songs = selected === "happy" ? happy : sad;

  // Loop through and create a link for each song
  for (const [songName, embedUrl] of Object.entries(songs)) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = songName;
    a.href = "#";

    // When a song is clicked, show the iframe
    a.addEventListener("click", (e) => {
      e.preventDefault();
      videoFrame.src = embedUrl;
      videoFrame.classList.remove("hidden");
    });

    li.appendChild(a);
    songList.appendChild(li);
  }
});
