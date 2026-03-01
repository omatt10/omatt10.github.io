//Song class
class Song {
    constructor(title, artist, album, year, genre, imageFile, youtubeCode) {
        this.title       = title;
        this.artist      = artist;
        this.album       = album;
        this.year        = year;
        this.genre       = genre;
        this.imageFile   = imageFile;    // e.g. "images/jolene.webp"
        this.youtubeCode = youtubeCode;  // e.g. "Ixrje2rXLMA"
    }

    // Returns the image path
    getImageSrc() {
        return this.imageFile;
    }

    // Returns the YouTube embed URL
    getEmbedUrl() {
        return `https://www.youtube.com/embed/${this.youtubeCode}`;
    }

    // Builds and returns a DOM card element for this song
    getCard() {
        const card = document.createElement('div');
        card.className = 'music-card';

        card.innerHTML = `
            <div class="card-header">
                <p class="card-title">${this.title}</p>
                <p class="card-artist">By ${this.artist}</p>
            </div>
            <img src="${this.getImageSrc()}" alt="${this.title} album cover" />
        `;

        card.addEventListener('click', () => openModal(this));

        return card;
    }
}

// Song Arrays
const songs = [
    new Song(
        "Two-Headed Boy",
        "Neutral Milk Hotel",
        "In the Aeroplane Over the Sea",
        1998,
        "Folk Music",
        "images/two-headed-boy.jpg",
        "2v4LKZS1wDQ"
    ),
    new Song(
        "Jailhouse Rock",
        "Elvis Presley",
        "Jailhouse Rock",
        1957,
        "Rock and Roll",
        "images/jailhouse-rock.webp",
        "gj0Rz-uP4Mk"
    ),
    new Song(
        "So What",
        "Miles Davis",
        "Kind of Blue",
        1959,
        "Jazz",
        "images/so-what.webp",
        "ylXk1LBvIqU"
    ),
    new Song(
        "Jolene",
        "Dolly Parton",
        "Jolene",
        1973,
        "Country",
        "images/jolene.webp",
        "Ixrje2rXLMA"
    ),
];
//reder gallery
function renderGallery() {
    const gallery = document.getElementById('musicGallery');
    songs.forEach(song => gallery.appendChild(song.getCard()));
}

// Populate and open the modal for the clicked song
function openModal(song) {
    document.getElementById('modalTitle').textContent    = song.title;
    document.getElementById('modalArtist').textContent   = `by ${song.artist}`;
    document.getElementById('modalAlbumYear').textContent = `${song.album}, ${song.year}`;
    document.getElementById('modalGenre').textContent    = song.genre;
    document.getElementById('modalYT').src               = song.getEmbedUrl();

    document.getElementById('musicModal').style.display = 'block';
}

// Hide modal and stop video playback
function closeModal() {
    document.getElementById('musicModal').style.display = 'none';
    document.getElementById('modalYT').src = '';
}

document.getElementById('closeModal').addEventListener('click', closeModal);

// Click on dark backdrop closes modal
document.getElementById('musicModal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
});

// ESC key closes modal
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});
//Init
renderGallery();