const playliste = ["sang 1", "song 2", "get money yah yah", "lil baby-freestyle", "we lost dancing - hanni remix", "har jeg 10 snart", "kl fem af seebach", "rap caviar", "samurai acopolupse", "i write tragedies not sins?"];

const liste = document.querySelector("ul");

playliste.forEach(Playlist);

function Playlist(playliste) {
  liste.innerHTML += "<li>" + playliste;
}
