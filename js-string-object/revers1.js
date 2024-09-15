const songs = "Until i found";
let songRevers = "";

for (const song of songs) {
  songRevers = song + songRevers;
}
console.log(songRevers, "for loop");

// shortcut
const reversed = songs.split("").reverse().join("");
console.log(reversed, "shortcut");
