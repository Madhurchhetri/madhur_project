console.log("Welcome to the JavaScript world");

let currentSong = new Audio();

async function getSongs() {
  try {
    let response = await fetch("http://127.0.0.1:5500/Songs/");
    let text = await response.text();

    // Parse the response to extract song links
    let div = document.createElement("div");
    div.innerHTML = text;
    let anchors = div.getElementsByTagName("a");

    let songs = [];
    for (let index = 0; index < anchors.length; index++) {
      const element = anchors[index];
      if (element.href.endsWith(".mp3")) {
        songs.push(element.href.split("/Songs/")[1]); // Extract file name
      }
    }
    return songs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}

const playMusic = (track) => {
  // Properly construct the song URL
//   let encodedTrack = encodeURIComponent(track.trim());
//   currentSong.src = `http://127.0.0.1:5500/Songs/${encodedTrack}`;
//   currentSong.play();

//   let normalizedTrack = track.replace(/\${2,}/g, " "); // Replace double or more spaces with a single space
//   let encodedTrack = encodeURIComponent(normalizedTrack.trim());
//   currentSong.src = `http://127.0.0.1:5500/Songs/${encodedTrack}`;
//   currentSong.play();

  let normalizedTrack = track.trim().replace(/\s{2,}/g, " ");
  let encodedTrack = encodeURIComponent(normalizedTrack);
  let songUrl = `http://127.0.0.1:5500/Songs/${encodedTrack}`;
  console.log("Playing song from URL:", songUrl);
  currentSong.src = songUrl;
  currentSong.play();
};

async function main() {
  // Get the list of songs
  let songs = await getSongs();
  console.log("Songs found:", songs);

  // Display the playlist
  let songUl = document.querySelector(".songList ul");
  for (const song of songs) {
    const songName = decodeURIComponent(song).replace(/\$/, ""); // Remove extension for display
    songUl.innerHTML += `
      <li>
        <img class="invert" src="music.svg" alt="music">
        <div class="info">
          <div class='songName'>${songName}</div>
          <div>Zin</div>
        </div>
        <div class="playNow">
          <span>Play Now</span>
          <img class="invert" src="play.svg" alt="play">
        </div>
      </li>
    `;
  }

  // Attach event listeners to play songs
  Array.from(songUl.getElementsByTagName("li")).forEach((li) => {
    li.addEventListener("click", () => {
      let songName = li.querySelector(".info .songName").innerHTML.trim();
      console.log(`Playing song: ${songName}`);
      playMusic(songName);
    });
  });
}

main();
