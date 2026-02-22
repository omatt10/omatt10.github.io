// Associative arrays — key: song name, value: YouTube embed URL
const happy = {
  "West Savannah by Isaiah Rashad ft SZA":
    "https://www.youtube.com/embed/vor0Oph03Fg?si=_XH3uZm86fvImVqW",
  "Could You Be Loved by Bob Marley & The Wailers":
    "https://www.youtube.com/embed/1ti2YCFgCoI?si=sCxuvm3Z_YUbwagn",
  "Dance In The Dark by Rihanna":
    "https://www.youtube.com/embed/O1QVDIL12pU?si=Efw5zPLgAXBxcNSA",
  "Dog Days Are Over by Florence + Machine":
    "https://www.youtube.com/embed/vDHr85LiwUM?si=J5sj0LS020QRKPAt",
  "Rich Girl by Daryl Hall & John Oates":
    "https://www.youtube.com/embed/AmHE65RAkSY?si=S4DbWsuqEoVnqIj6",
};

const sad = {
  "High No More":
    "https://www.youtube.com/embed/AQqL3ViB5nI?si=RMRq7wpaIrJLBNJl",
  "I Drink Wine by Adele":
    "https://www.youtube.com/embed/jDvYDzFOK9A?si=hs31hv14PSvTtxv9",
  "Cool About It by boygenius":
    "https://www.youtube.com/embed/G-XICfi4j3Q?si=M5MJithVpriazasA",
  "Who Knows by Dainel Ceaser":
    "https://www.youtube.com/embed/Wzn4BLtE73o?si=dm6qDb4siUeV2egv",
  "Moon River by Frank Ocean":
    "https://www.youtube.com/embed/mXiFHDfvn4A?si=A38-ifd_r7OWBov7",
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
