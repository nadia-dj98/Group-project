// Generator script

let filmTitleArray = ["365 Days", "Atlantics", "Blue is the Warmest Colour","Flee", "In the Fade", "M. Ibrahim and the Flowers of the Koran", "Mirai","Mrs. Serial Killer", "Pan's Labyrinth", "Parasite", "Perfect Strangers", "Persepolis", "The Other Me", "Tokyo Tribe", "Trollhunter"]

let filmLinkArray = ["FilmPages/365Days.html", "FilmPages/Atlantics.html", "FilmPages/Blueisthe.html", "FilmPages/Flee.html", "FilmPages/IntheFade.html", "FilmPages/MIbrahim.html", "FilmPages/Mirai.html", "FilmPages/MrsSerialKiller.html", "FilmPages/Pans.html", "FilmPages/Parasite.html", "FilmPages/PerfectStrangers.html", "FilmPages/Persepolis.html", "FilmPages/TheOtherMe.html", "FilmPages/TokyoTribe.html", "FilmPages/Trollhunter.html"]

let i = 0;

let filmLinkgen = 0;

let butn = document.getElementById("generate-link");
butn.style.display = "none";

function showFilm() {
  i = Math.floor(Math.random() * filmTitleArray.length)
  let filmGenerate = filmTitleArray[i];
  let filmLinkgen = filmLinkArray[i];
  document.getElementById("generated-film").innerHTML = filmGenerate;
  // document.getElementById("generated-link").innerHTML = filmLinkgen;
  // document.getElementById("generated-link").innerHTML = filmLinkArray[i];
  console.log(filmLinkgen);
  console.log(i);
  
  butn.style.display = "block";
  
}

function visitPage(){
        window.location= filmLinkArray[i];

    }